import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import useInterval from '.';

describe('useInterval', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call callback at specified interval', () => {
    const callback = vi.fn();
    renderHook(() => useInterval(callback, 1000));

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);

    vi.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(5);
  });

  it('should not call callback when delay is null', () => {
    const callback = vi.fn();
    renderHook(() => useInterval(callback, null));

    vi.advanceTimersByTime(5000);
    expect(callback).not.toHaveBeenCalled();
  });

  it('should pause and resume when delay changes', () => {
    const callback = vi.fn();
    const { rerender } = renderHook(({ delay }) => useInterval(callback, delay), {
      initialProps: { delay: 1000 as number | null },
    });

    vi.advanceTimersByTime(2500);
    expect(callback).toHaveBeenCalledTimes(2);

    // 暂停
    rerender({ delay: null });
    vi.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(2);

    // 恢复
    rerender({ delay: 500 });
    vi.advanceTimersByTime(1500);
    expect(callback).toHaveBeenCalledTimes(5);
  });

  it('should use latest callback', () => {
    const results: number[] = [];
    let count = 0;

    const { rerender } = renderHook(({ callback }) => useInterval(callback, 100), {
      initialProps: {
        callback: () => {
          results.push(count);
        },
      },
    });

    vi.advanceTimersByTime(100);
    expect(results).toEqual([0]);

    count = 10;
    rerender({
      callback: () => {
        results.push(count);
      },
    });

    vi.advanceTimersByTime(100);
    expect(results).toEqual([0, 10]);
  });

  it('should clear interval on unmount', () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => useInterval(callback, 100));

    vi.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(2);

    unmount();

    vi.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should handle delay change correctly', () => {
    const callback = vi.fn();
    const { rerender } = renderHook(({ delay }) => useInterval(callback, delay), {
      initialProps: { delay: 100 },
    });

    vi.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(2);

    // 改变 delay
    rerender({ delay: 500 });
    vi.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(2);

    vi.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(3);
  });
});
