import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * 轮询配置选项
 */
export interface PollingConfig {
  /** 初始轮询间隔（毫秒），默认 1000 */
  initialInterval?: number;
  /** 最大轮询间隔（毫秒），默认 32000 */
  maxInterval?: number;
  /** 退避因子，默认 2 */
  backoffFactor?: number;
  /** 最大尝试次数，默认 5 */
  maxAttempts?: number;
  /** 成功回调 */
  onSuccess?: () => void;
  /** 错误回调 */
  onError?: (error: Error) => void;
  /** 重试条件判断函数 */
  retryCondition?: (error: Error) => boolean;
}

/**
 * 轮询状态
 */
export interface PollingState {
  /** 是否正在轮询 */
  isPolling: boolean;
  /** 当前轮询间隔 */
  currentInterval: number;
  /** 当前尝试次数 */
  attempts: number;
  /** 错误信息 */
  error: Error | null;
}

/**
 * usePollingAI 返回值类型
 */
export interface UsePollingReturn {
  /** 开始轮询 */
  start: () => void;
  /** 停止轮询 */
  stop: () => void;
  /** 重置轮询状态 */
  reset: () => void;
  /** 是否正在轮询 */
  isPolling: boolean;
  /** 当前轮询间隔 */
  currentInterval: number;
  /** 当前尝试次数 */
  attempts: number;
  /** 错误信息 */
  error: Error | null;
}

/**
 * 支持指数退避的智能轮询 Hook
 *
 * 特性：
 * - 成功后重置间隔
 * - 失败后指数退避（间隔翻倍）
 * - 可配置最大重试次数
 * - 支持自定义重试条件
 *
 * @param pollingFunction - 轮询执行的异步函数
 * @param config - 轮询配置
 * @returns 轮询控制方法和状态
 *
 * @example
 * ```tsx
 * const { start, stop, isPolling, attempts, error } = usePollingAI(
 *   async () => {
 *     const result = await checkTaskStatus(taskId);
 *     if (result.status === 'completed') {
 *       stop();
 *     }
 *   },
 *   {
 *     initialInterval: 2000,
 *     maxInterval: 30000,
 *     maxAttempts: 10,
 *     onSuccess: () => console.log('轮询成功'),
 *     onError: (err) => console.error('轮询失败', err),
 *   }
 * );
 *
 * // 开始轮询
 * <button onClick={start}>开始检查</button>
 * <button onClick={stop}>停止</button>
 * ```
 */
export function usePollingAI<T>(
  pollingFunction: () => Promise<T>,
  config: PollingConfig = {}
): UsePollingReturn {
  const {
    initialInterval = 1000,
    maxInterval = 32000,
    backoffFactor = 2,
    maxAttempts = 5,
    onSuccess,
    onError,
    retryCondition = () => true,
  } = config;

  const [state, setState] = useState<PollingState>({
    isPolling: false,
    currentInterval: initialInterval,
    attempts: 0,
    error: null,
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPollingRef = useRef(false);

  // 停止轮询
  const stop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isPollingRef.current = false;
    setState((prev) => ({ ...prev, isPolling: false }));
  }, []);

  // 重置轮询状态
  const reset = useCallback(() => {
    stop();
    setState({
      isPolling: false,
      currentInterval: initialInterval,
      attempts: 0,
      error: null,
    });
  }, [initialInterval, stop]);

  // 计算下一个轮询间隔
  const calculateNextInterval = useCallback(
    (currentInterval: number) => {
      return Math.min(currentInterval * backoffFactor, maxInterval);
    },
    [backoffFactor, maxInterval]
  );

  // 执行轮询
  const poll = useCallback(async () => {
    if (!isPollingRef.current) return;

    try {
      await pollingFunction();

      // 成功后重置间隔并继续轮询
      setState((prev) => ({
        ...prev,
        currentInterval: initialInterval,
        attempts: 0,
        error: null,
      }));

      onSuccess?.();

      // 安排下一次轮询
      if (isPollingRef.current) {
        timeoutRef.current = setTimeout(poll, initialInterval);
      }
    } catch (error) {
      if (error instanceof Error) {
        setState((prev) => {
          const newAttempts = prev.attempts + 1;

          // 检查是否需要继续重试
          if (newAttempts < maxAttempts && retryCondition(error)) {
            const nextInterval = calculateNextInterval(prev.currentInterval);

            // 安排下一次重试
            if (isPollingRef.current) {
              timeoutRef.current = setTimeout(poll, nextInterval);
            }

            return {
              ...prev,
              attempts: newAttempts,
              currentInterval: nextInterval,
              error,
            };
          } else {
            // 停止轮询
            isPollingRef.current = false;
            return {
              ...prev,
              isPolling: false,
              attempts: newAttempts,
              error,
            };
          }
        });

        onError?.(error);
      }
    }
  }, [
    pollingFunction,
    initialInterval,
    maxAttempts,
    calculateNextInterval,
    onSuccess,
    onError,
    retryCondition,
  ]);

  // 开始轮询
  const start = useCallback(() => {
    if (isPollingRef.current) return;

    isPollingRef.current = true;
    setState((prev) => ({ ...prev, isPolling: true }));
    poll();
  }, [poll]);

  // 清理函数
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    start,
    stop,
    reset,
    isPolling: state.isPolling,
    currentInterval: state.currentInterval,
    attempts: state.attempts,
    error: state.error,
  };
}
