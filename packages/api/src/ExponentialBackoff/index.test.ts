import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ExponentialBackoff, retry } from '.';

describe('ExponentialBackoff', () => {
  it('should return increasing delays', () => {
    const backoff = new ExponentialBackoff({
      baseInterval: 100,
      jitter: 0,
    });

    expect(backoff.nextDelay()).toBe(100);
    expect(backoff.nextDelay()).toBe(200);
    expect(backoff.nextDelay()).toBe(400);
  });

  it('should respect maxInterval', () => {
    const backoff = new ExponentialBackoff({
      baseInterval: 100,
      maxInterval: 300,
      jitter: 0,
    });

    expect(backoff.nextDelay()).toBe(100);
    expect(backoff.nextDelay()).toBe(200);
    expect(backoff.nextDelay()).toBe(300);
    expect(backoff.nextDelay()).toBe(300);
  });

  it('should throw after maxRetries', () => {
    const backoff = new ExponentialBackoff({
      maxRetries: 2,
    });

    backoff.nextDelay();
    backoff.nextDelay();

    expect(() => backoff.nextDelay()).toThrow('Max retries (2) exceeded');
  });

  it('should reset properly', () => {
    const backoff = new ExponentialBackoff({
      baseInterval: 100,
      jitter: 0,
    });

    backoff.nextDelay();
    backoff.nextDelay();
    backoff.reset();

    expect(backoff.nextDelay()).toBe(100);
    expect(backoff.retryCount).toBe(1);
  });

  it('should track canRetry', () => {
    const backoff = new ExponentialBackoff({ maxRetries: 1 });

    expect(backoff.canRetry).toBe(true);
    backoff.nextDelay();
    expect(backoff.canRetry).toBe(false);
  });
});

describe('retry', () => {
  it('should return result on success', async () => {
    const fn = vi.fn().mockResolvedValue('success');
    const result = await retry(fn);

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should retry on failure', async () => {
    const fn = vi.fn().mockRejectedValueOnce(new Error('fail')).mockResolvedValue('success');

    const result = await retry(fn, { baseInterval: 10, jitter: 0 });

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should throw after max retries', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('always fail'));

    await expect(retry(fn, { maxRetries: 2, baseInterval: 10, jitter: 0 })).rejects.toThrow(
      'always fail'
    );

    expect(fn).toHaveBeenCalledTimes(3);
  });
});
