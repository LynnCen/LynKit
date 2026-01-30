import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePollingAI } from '.';

describe('usePollingAI', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should have correct initial state', () => {
    const pollingFn = vi.fn(() => Promise.resolve());
    const { result } = renderHook(() => usePollingAI(pollingFn));

    expect(result.current.isPolling).toBe(false);
    expect(result.current.currentInterval).toBe(1000);
    expect(result.current.attempts).toBe(0);
    expect(result.current.error).toBeNull();
  });

  it('should start and stop polling', async () => {
    const pollingFn = vi.fn(() => Promise.resolve());
    const { result } = renderHook(() => usePollingAI(pollingFn));

    // 开始轮询
    await act(async () => {
      result.current.start();
    });

    expect(result.current.isPolling).toBe(true);
    expect(pollingFn).toHaveBeenCalledTimes(1);

    // 停止轮询
    act(() => {
      result.current.stop();
    });

    expect(result.current.isPolling).toBe(false);
  });

  it('should poll at specified interval on success', async () => {
    const pollingFn = vi.fn(() => Promise.resolve());
    const { result } = renderHook(() => usePollingAI(pollingFn, { initialInterval: 500 }));

    await act(async () => {
      result.current.start();
    });

    expect(pollingFn).toHaveBeenCalledTimes(1);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(pollingFn).toHaveBeenCalledTimes(2);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(pollingFn).toHaveBeenCalledTimes(3);

    act(() => {
      result.current.stop();
    });
  });

  it('should apply exponential backoff on error', async () => {
    const error = new Error('Network error');
    const pollingFn = vi.fn(() => Promise.reject(error));
    const onError = vi.fn();

    const { result } = renderHook(() =>
      usePollingAI(pollingFn, {
        initialInterval: 1000,
        backoffFactor: 2,
        maxInterval: 10000,
        maxAttempts: 5,
        onError,
      })
    );

    await act(async () => {
      result.current.start();
    });

    // 第一次失败
    expect(pollingFn).toHaveBeenCalledTimes(1);
    expect(result.current.attempts).toBe(1);
    expect(result.current.currentInterval).toBe(2000); // 1000 * 2
    expect(onError).toHaveBeenCalledWith(error);

    // 等待下一次重试
    await act(async () => {
      vi.advanceTimersByTime(2000);
    });

    expect(pollingFn).toHaveBeenCalledTimes(2);
    expect(result.current.attempts).toBe(2);
    expect(result.current.currentInterval).toBe(4000); // 2000 * 2

    act(() => {
      result.current.stop();
    });
  });

  it('should respect maxInterval', async () => {
    const pollingFn = vi.fn(() => Promise.reject(new Error('error')));

    const { result } = renderHook(() =>
      usePollingAI(pollingFn, {
        initialInterval: 1000,
        backoffFactor: 2,
        maxInterval: 3000,
        maxAttempts: 10,
      })
    );

    await act(async () => {
      result.current.start();
    });

    // 1000 * 2 = 2000
    expect(result.current.currentInterval).toBe(2000);

    await act(async () => {
      vi.advanceTimersByTime(2000);
    });

    // 2000 * 2 = 4000, 但 max 是 3000
    expect(result.current.currentInterval).toBe(3000);

    await act(async () => {
      vi.advanceTimersByTime(3000);
    });

    // 仍然是 3000
    expect(result.current.currentInterval).toBe(3000);

    act(() => {
      result.current.stop();
    });
  });

  it('should stop after maxAttempts', async () => {
    const pollingFn = vi.fn(() => Promise.reject(new Error('error')));

    const { result } = renderHook(() =>
      usePollingAI(pollingFn, {
        initialInterval: 100,
        maxAttempts: 2,
      })
    );

    await act(async () => {
      result.current.start();
    });

    // 第一次失败
    expect(result.current.attempts).toBe(1);
    expect(result.current.isPolling).toBe(true);

    await act(async () => {
      vi.advanceTimersByTime(200);
    });

    // 第二次失败，达到 maxAttempts
    expect(result.current.attempts).toBe(2);
    expect(result.current.isPolling).toBe(false);
  });

  it('should reset state correctly', async () => {
    const pollingFn = vi.fn(() => Promise.reject(new Error('error')));

    const { result } = renderHook(() =>
      usePollingAI(pollingFn, {
        initialInterval: 1000,
        maxAttempts: 10,
      })
    );

    await act(async () => {
      result.current.start();
    });

    expect(result.current.attempts).toBe(1);
    expect(result.current.error).not.toBeNull();

    act(() => {
      result.current.reset();
    });

    expect(result.current.isPolling).toBe(false);
    expect(result.current.attempts).toBe(0);
    expect(result.current.error).toBeNull();
    expect(result.current.currentInterval).toBe(1000);
  });

  it('should call onSuccess on successful poll', async () => {
    const pollingFn = vi.fn(() => Promise.resolve());
    const onSuccess = vi.fn();

    const { result } = renderHook(() => usePollingAI(pollingFn, { onSuccess }));

    await act(async () => {
      result.current.start();
    });

    expect(onSuccess).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.stop();
    });
  });

  it('should reset interval after success', async () => {
    let callCount = 0;
    const pollingFn = vi.fn(() => {
      callCount++;
      // 前两次失败，第三次成功
      if (callCount <= 2) {
        return Promise.reject(new Error('error'));
      }
      return Promise.resolve();
    });

    const { result } = renderHook(() =>
      usePollingAI(pollingFn, {
        initialInterval: 1000,
        backoffFactor: 2,
        maxAttempts: 10,
      })
    );

    await act(async () => {
      result.current.start();
    });

    // 第一次失败，间隔变为 2000
    expect(result.current.currentInterval).toBe(2000);

    await act(async () => {
      vi.advanceTimersByTime(2000);
    });

    // 第二次失败，间隔变为 4000
    expect(result.current.currentInterval).toBe(4000);

    await act(async () => {
      vi.advanceTimersByTime(4000);
    });

    // 第三次成功，间隔重置为 1000
    expect(result.current.currentInterval).toBe(1000);
    expect(result.current.attempts).toBe(0);

    act(() => {
      result.current.stop();
    });
  });
});
