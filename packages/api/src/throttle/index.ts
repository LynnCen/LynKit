/**
 * 节流函数选项
 */
export interface ThrottleOptions {
  /** 是否在节流开始前调用 */
  leading?: boolean;
  /** 是否在节流结束后调用 */
  trailing?: boolean;
}

/**
 * 节流函数返回类型
 */
export interface ThrottledFunction<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void;
  /** 取消节流 */
  cancel: () => void;
}

/**
 * 节流函数 - 限制函数在一定时间内只能执行一次
 *
 * @param func - 需要节流的函数
 * @param wait - 节流时间间隔(ms)
 * @param options - 配置选项
 * @returns 返回一个包装后的节流函数
 *
 * @example
 * ```ts
 * // 基础用法
 * const throttledScroll = throttle(() => {
 *   console.log('滚动');
 * }, 200);
 *
 * window.addEventListener('scroll', throttledScroll);
 *
 * // 取消
 * throttledScroll.cancel();
 * ```
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  options: ThrottleOptions = {}
): ThrottledFunction<T> {
  const { leading = true, trailing = true } = options;

  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: unknown = null;
  let lastCallTime: number | undefined;

  function invokeFunc(): void {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = null;
    lastThis = null;
    if (args) {
      func.apply(thisArg, args);
    }
  }

  function startTimer(): void {
    timeout = setTimeout(() => {
      timeout = null;
      if (trailing && lastArgs) {
        invokeFunc();
        startTimer();
      }
    }, wait);
  }

  function throttled(this: unknown, ...args: Parameters<T>): void {
    const now = Date.now();
    const isFirstCall = lastCallTime === undefined;

    lastArgs = args;
    lastThis = this;
    lastCallTime = now;

    if (isFirstCall) {
      if (leading) {
        invokeFunc();
      }
      startTimer();
      return;
    }

    if (timeout === null) {
      if (leading) {
        invokeFunc();
      }
      startTimer();
    }
  }

  throttled.cancel = function (): void {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    lastArgs = null;
    lastThis = null;
    lastCallTime = undefined;
  };

  return throttled;
}

export default throttle;
