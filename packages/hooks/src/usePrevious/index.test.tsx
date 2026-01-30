import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import usePrevious from '.';

describe('usePrevious', () => {
  it('should return undefined on first render', () => {
    const { result } = renderHook(() => usePrevious(0));

    expect(result.current).toBeUndefined();
  });

  it('should return previous value after update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 },
    });

    expect(result.current).toBeUndefined();

    rerender({ value: 1 });
    expect(result.current).toBe(0);

    rerender({ value: 2 });
    expect(result.current).toBe(1);

    rerender({ value: 10 });
    expect(result.current).toBe(2);
  });

  it('should not update when value is the same', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'hello' },
    });

    expect(result.current).toBeUndefined();

    rerender({ value: 'hello' });
    expect(result.current).toBeUndefined();

    rerender({ value: 'world' });
    expect(result.current).toBe('hello');

    rerender({ value: 'world' });
    expect(result.current).toBe('hello');
  });

  it('should support custom shouldUpdate function', () => {
    // 只有当新值比旧值大 5 以上时才更新
    const shouldUpdate = (prev: number | undefined, next: number) => {
      return prev === undefined || next - prev > 5;
    };

    const { result, rerender } = renderHook(({ value }) => usePrevious(value, shouldUpdate), {
      initialProps: { value: 0 },
    });

    expect(result.current).toBeUndefined();

    rerender({ value: 3 }); // 3 - 0 = 3, 不大于 5
    expect(result.current).toBeUndefined();

    rerender({ value: 6 }); // 6 - 0 = 6, 大于 5
    expect(result.current).toBe(0);

    rerender({ value: 10 }); // 10 - 6 = 4, 不大于 5
    expect(result.current).toBe(0);

    rerender({ value: 15 }); // 15 - 6 = 9, 大于 5
    expect(result.current).toBe(6);
  });

  it('should work with objects using Object.is comparison', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };

    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: obj1 },
    });

    expect(result.current).toBeUndefined();

    // 不同对象引用，即使内容相同
    rerender({ value: obj2 });
    expect(result.current).toBe(obj1);

    // 相同对象引用
    rerender({ value: obj2 });
    expect(result.current).toBe(obj1);
  });
});
