/**
 * 防抖函数选项
 */
export interface DebounceOptions {
  /** 是否在延迟开始前调用 */
  leading?: boolean;
  /** 是否在延迟结束后调用 */
  trailing?: boolean;
}

/**
 * 防抖函数返回类型
 */
export interface DebouncedFunction<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void;
  /** 取消延迟调用 */
  cancel: () => void;
  /** 立即执行 */
  flush: () => void;
}

/**
 * 防抖函数 - 将多次执行的函数合并成一次执行
 *
 * @param func - 需要防抖的函数
 * @param wait - 等待时间(ms)
 * @param options - 配置选项
 * @returns 返回一个包装后的防抖函数
 *
 * @example
 * ```ts
 * // 基础用法
 * const debouncedSearch = debounce((query: string) => {
 *   console.log('搜索:', query);
 * }, 300);
 *
 * // 带选项
 * const debouncedSave = debounce(save, 1000, { leading: true });
 *
 * // 取消
 * debouncedSearch.cancel();
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  options: DebounceOptions = {}
): DebouncedFunction<T> {
  const { leading = false, trailing = true } = options;

  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: unknown = null;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;

  function invokeFunc(time: number): void {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = null;
    lastThis = null;
    lastInvokeTime = time;
    if (args) {
      func.apply(thisArg, args);
    }
  }

  function startTimer(pendingFunc: () => void, wait: number): void {
    timeout = setTimeout(pendingFunc, wait);
  }

  function cancelTimer(): void {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }

  function remainingWait(time: number): number {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    return wait - timeSinceLastCall;
  }

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      timeSinceLastInvoke >= wait
    );
  }

  function trailingEdge(time: number): void {
    timeout = null;
    if (trailing && lastArgs) {
      invokeFunc(time);
    } else {
      lastArgs = null;
      lastThis = null;
    }
  }

  function timerExpired(): void {
    const time = Date.now();
    if (shouldInvoke(time)) {
      trailingEdge(time);
    } else {
      startTimer(timerExpired, remainingWait(time));
    }
  }

  function leadingEdge(time: number): void {
    lastInvokeTime = time;
    startTimer(timerExpired, wait);
    if (leading) {
      invokeFunc(time);
    }
  }

  function debounced(this: unknown, ...args: Parameters<T>): void {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeout === null) {
        leadingEdge(time);
        return;
      }
    }
    if (timeout === null) {
      startTimer(timerExpired, wait);
    }
  }

  debounced.cancel = function (): void {
    cancelTimer();
    lastInvokeTime = 0;
    lastArgs = null;
    lastThis = null;
    lastCallTime = undefined;
  };

  debounced.flush = function (): void {
    if (timeout !== null) {
      trailingEdge(Date.now());
    }
  };

  return debounced;
}

export default debounce;
