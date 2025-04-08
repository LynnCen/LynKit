
class ExponentialBackoff {
  private readonly baseInterval: number;  // 基础间隔时间(ms)
  private readonly maxInterval: number;   // 最大间隔时间(ms)
  private readonly maxRetries: number;    // 最大重试次数
  private readonly jitter: number;        // 抖动因子
  private retryCount: number = 0;         // 当前重试次数

  constructor({
    baseInterval = 1000,
    maxInterval = 30000,
    maxRetries = 5,
    jitter = 0.1
  } = {}) {
    this.baseInterval = baseInterval;
    this.maxInterval = maxInterval;
    this.maxRetries = maxRetries;
    this.jitter = jitter;
  }

  /**
   * 计算下一次等待时间
   */
  getNextDelay(): number {
    if (this.retryCount >= this.maxRetries) {
      throw new Error('Max retries exceeded');
    }

    // 计算基础等待时间
    const baseDelay = Math.min(
      this.baseInterval * Math.pow(2, this.retryCount),
      this.maxInterval
    );

    // 添加随机抖动
    const jitterDelta = baseDelay * this.jitter;
    const jitter = Math.random() * jitterDelta * 2 - jitterDelta;

    this.retryCount++;
    return Math.max(0, baseDelay + jitter);
  }

  /**
   * 重置重试计数
   */
  reset(): void {
    this.retryCount = 0;
  }
}

export default ExponentialBackoff;