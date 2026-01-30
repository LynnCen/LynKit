import { describe, it, expect, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import useAsync from '.';

describe('useAsync', () => {
  it('should have correct initial state', () => {
    const asyncFn = vi.fn(() => Promise.resolve('data'));
    const { result } = renderHook(() => useAsync(asyncFn));

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();
    expect(result.current.isError).toBe(false);
    expect(typeof result.current.trigger).toBe('function');
  });

  it('should support initial data', () => {
    const asyncFn = vi.fn(() => Promise.resolve('new data'));
    const { result } = renderHook(() => useAsync(asyncFn, 'initial'));

    expect(result.current.data).toBe('initial');
  });

  it('should handle successful async call', async () => {
    const asyncFn = vi.fn(() => Promise.resolve('success data'));
    const { result } = renderHook(() => useAsync(asyncFn));

    await act(async () => {
      const data = await result.current.trigger();
      expect(data).toBe('success data');
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe('success data');
    expect(result.current.isError).toBe(false);
    expect(asyncFn).toHaveBeenCalledTimes(1);
  });

  it('should handle failed async call', async () => {
    const error = new Error('Failed!');
    const asyncFn = vi.fn(() => Promise.reject(error));
    const { result } = renderHook(() => useAsync(asyncFn));

    await act(async () => {
      await result.current.trigger();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBe(error);
  });

  it('should set loading state during async call', async () => {
    let resolvePromise: (value: string) => void;
    const asyncFn = vi.fn(
      () =>
        new Promise<string>((resolve) => {
          resolvePromise = resolve;
        })
    );

    const { result } = renderHook(() => useAsync(asyncFn));

    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.trigger();
    });

    // 等待状态更新
    await waitFor(() => {
      expect(result.current.loading).toBe(true);
    });

    await act(async () => {
      resolvePromise!('done');
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should execute immediately when immediate is true', async () => {
    const asyncFn = vi.fn(() => Promise.resolve('immediate data'));

    const { result } = renderHook(() => useAsync(asyncFn, undefined, true));

    await waitFor(() => {
      expect(asyncFn).toHaveBeenCalledTimes(1);
      expect(result.current.data).toBe('immediate data');
    });
  });

  it('should pass arguments to async function', async () => {
    const asyncFn = vi.fn((id: string, name: string) => Promise.resolve({ id, name }));

    const { result } = renderHook(() => useAsync(asyncFn));

    await act(async () => {
      await result.current.trigger('123', 'John');
    });

    expect(asyncFn).toHaveBeenCalledWith('123', 'John');
    expect(result.current.data).toEqual({ id: '123', name: 'John' });
  });

  it('should support non-function value (preloaded data)', async () => {
    const preloadedData = { message: 'preloaded' };
    const { result } = renderHook(() => useAsync(preloadedData));

    await act(async () => {
      await result.current.trigger();
    });

    expect(result.current.data).toEqual({ message: 'preloaded' });
  });

  it('should reset error state on new trigger', async () => {
    let shouldFail = true;
    const asyncFn = vi.fn(() => {
      if (shouldFail) {
        return Promise.reject(new Error('Failed'));
      }
      return Promise.resolve('success');
    });

    const { result } = renderHook(() => useAsync(asyncFn));

    // 第一次调用失败
    await act(async () => {
      await result.current.trigger();
    });
    expect(result.current.isError).toBe(true);

    // 第二次调用成功
    shouldFail = false;
    await act(async () => {
      await result.current.trigger();
    });

    expect(result.current.isError).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBe('success');
  });
});
