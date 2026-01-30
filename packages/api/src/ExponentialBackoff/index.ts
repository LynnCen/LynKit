/**
 * 指数退避配置选项
 */
export interface ExponentialBackoffOptions {
  /** 基础间隔时间(ms)，默认 1000 */
  baseInterval?: number;
  /** 最大间隔时间(ms)，默认 30000 */
  maxInterval?: number;
  /** 最大重试次数，默认 5 */
  maxRetries?: number;
  /** 抖动因子 (0-1)，默认 0.1 */
  jitter?: number;
}

/**
 * 指数退避算法
 *
 * 用于实现重试机制，每次重试间隔时间指数增长
 *
 * @example
 * ```ts
 * const backoff = new ExponentialBackoff({ maxRetries: 3 });
 *
 * async function fetchWithRetry(url: string) {
 *   while (true) {
 *     try {
 *       return await fetch(url);
 *     } catch (err) {
 *       const delay = backoff.nextDelay();
 *       await new Promise(r => setTimeout(r, delay));
 *     }
 *   }
 * }
 * ```
 */
export class ExponentialBackoff {
  private readonly baseInterval: number;
  private readonly maxInterval: number;
  private readonly maxRetries: number;
  private readonly jitter: number;
  private attempts: number = 0;

  constructor(options: ExponentialBackoffOptions = {}) {
    const { baseInterval = 1000, maxInterval = 30000, maxRetries = 5, jitter = 0.1 } = options;

    this.baseInterval = baseInterval;
    this.maxInterval = maxInterval;
    this.maxRetries = maxRetries;
    this.jitter = Math.min(1, Math.max(0, jitter));
  }

  /**
   * 获取下一次等待时间
   * @throws 超过最大重试次数时抛出错误
   */
  nextDelay(): number {
    if (this.attempts >= this.maxRetries) {
      throw new Error(`Max retries (${this.maxRetries}) exceeded`);
    }

    const baseDelay = Math.min(this.baseInterval * Math.pow(2, this.attempts), this.maxInterval);

    const jitterDelta = baseDelay * this.jitter;
    const jitterValue = Math.random() * jitterDelta * 2 - jitterDelta;

    this.attempts++;
    return Math.max(0, Math.round(baseDelay + jitterValue));
  }

  /**
   * 重置重试计数
   */
  reset(): void {
    this.attempts = 0;
  }

  /**
   * 当前重试次数
   */
  get retryCount(): number {
    return this.attempts;
  }

  /**
   * 是否可以继续重试
   */
  get canRetry(): boolean {
    return this.attempts < this.maxRetries;
  }
}

/**
 * 带重试的异步执行器
 *
 * @param fn - 要执行的异步函数
 * @param options - 退避选项
 * @returns Promise
 *
 * @example
 * ```ts
 * const result = await retry(
 *   () => fetch('/api/data'),
 *   { maxRetries: 3 }
 * );
 * ```
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options?: ExponentialBackoffOptions
): Promise<T> {
  const backoff = new ExponentialBackoff(options);

  while (true) {
    try {
      return await fn();
    } catch (error) {
      if (!backoff.canRetry) {
        throw error;
      }
      const delay = backoff.nextDelay();
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export default ExponentialBackoff;
