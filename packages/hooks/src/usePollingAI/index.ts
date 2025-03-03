// hooks/usePollingAI.ts
import { useEffect, useRef, useCallback, useState } from 'react';

interface PollingConfig {
  initialInterval?: number;    // 初始轮询间隔（毫秒）
  maxInterval?: number;        // 最大轮询间隔（毫秒）
  backoffFactor?: number;      // 退避因子
  maxAttempts?: number;        // 最大尝试次数
  onSuccess?: () => void;      // 成功回调
  onError?: (error: Error) => void; // 错误回调
  retryCondition?: (error: Error) => boolean; // 重试条件
}

interface PollingState {
  isPolling: boolean;          // 是否正在轮询
  currentInterval: number;     // 当前轮询间隔
  attempts: number;            // 当前尝试次数
  error: Error | null;         // 错误信息
}

export function usePollingAI<T>(
  pollingFunction: () => Promise<T>,
  config: PollingConfig = {}
) {
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

  const timeoutRef = useRef<NodeJS.Timeout>();
  const abortControllerRef = useRef<AbortController>();

  // 重置轮询状态
  const reset = useCallback(() => {
    setState({
      isPolling: false,
      currentInterval: initialInterval,
      attempts: 0,
      error: null,
    });
  }, [initialInterval]);

  // 停止轮询
  const stop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setState(prev => ({ ...prev, isPolling: false }));
  }, []);

  // 计算下一个轮询间隔
  const calculateNextInterval = useCallback((currentInterval: number) => {
    return Math.min(currentInterval * backoffFactor, maxInterval);
  }, [backoffFactor, maxInterval]);

  // 执行轮询
  const poll = useCallback(async () => {
    if (!state.isPolling) return;

    try {
      abortControllerRef.current = new AbortController();
      const result = await pollingFunction();

      // 成功后重置间隔并继续轮询
      setState(prev => ({
        ...prev,
        currentInterval: initialInterval,
        attempts: 0,
        error: null,
      }));

      onSuccess?.();

      // 安排下一次轮询
      timeoutRef.current = setTimeout(poll, initialInterval);
    } catch (error) {
      if (error instanceof Error) {
        setState(prev => ({
          ...prev,
          attempts: prev.attempts + 1,
          error,
        }));

        onError?.(error);

        // 检查是否需要继续重试
        if (
          state.attempts < maxAttempts &&
          retryCondition(error)
        ) {
          const nextInterval = calculateNextInterval(state.currentInterval);
          setState(prev => ({ ...prev, currentInterval: nextInterval }));
          timeoutRef.current = setTimeout(poll, nextInterval);
        } else {
          stop();
        }
      }
    }
  }, [
    state.isPolling,
    state.currentInterval,
    state.attempts,
    pollingFunction,
    initialInterval,
    maxAttempts,
    calculateNextInterval,
    onSuccess,
    onError,
    retryCondition,
    stop,
  ]);

  // 开始轮询
  const start = useCallback(() => {
    setState(prev => ({ ...prev, isPolling: true }));
    poll();
  }, [poll]);

  // 清理函数
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

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




