import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useSetState from '.';

describe('useSetState', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useSetState({ name: 'John', age: 25 }));

    expect(result.current[0]).toEqual({ name: 'John', age: 25 });
  });

  it('should merge state like class component', () => {
    const { result } = renderHook(() => useSetState({ a: 1, b: 2, c: 3 }));

    act(() => {
      result.current[1]({ a: 10 });
    });

    expect(result.current[0]).toEqual({ a: 10, b: 2, c: 3 });
  });

  it('should support function updater', () => {
    const { result } = renderHook(() => useSetState({ count: 0 }));

    act(() => {
      result.current[1]((prev) => ({ count: prev.count + 1 }));
    });

    expect(result.current[0].count).toBe(1);

    act(() => {
      result.current[1]((prev) => ({ count: prev.count + 5 }));
    });

    expect(result.current[0].count).toBe(6);
  });

  it('should support callback after state update', async () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useSetState({ value: 0 }));

    act(() => {
      result.current[1]({ value: 100 }, callback);
    });

    // 等待 useEffect 执行
    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  it('should support lazy initial state', () => {
    const initializer = vi.fn(() => ({ x: 10, y: 20 }));
    const { result } = renderHook(() => useSetState(initializer));

    expect(initializer).toHaveBeenCalledTimes(1);
    expect(result.current[0]).toEqual({ x: 10, y: 20 });
  });

  it('should maintain state reference stability', () => {
    const { result, rerender } = renderHook(() => useSetState({ value: 1 }));

    const setState1 = result.current[1];
    rerender();
    const setState2 = result.current[1];

    expect(setState1).toBe(setState2);
  });
});
