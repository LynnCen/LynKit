import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import useIsFirstRender from '.';

describe('useIsFirstRender', () => {
  it('should return true on first render', () => {
    const { result } = renderHook(() => useIsFirstRender());

    expect(result.current).toBe(true);
  });

  it('should return false on subsequent renders', () => {
    const { result, rerender } = renderHook(() => useIsFirstRender());

    expect(result.current).toBe(true);

    rerender();
    expect(result.current).toBe(false);

    rerender();
    expect(result.current).toBe(false);

    rerender();
    expect(result.current).toBe(false);
  });

  it('should be independent between component instances', () => {
    const { result: result1 } = renderHook(() => useIsFirstRender());
    const { result: result2 } = renderHook(() => useIsFirstRender());

    // 两个独立的 hook 实例，首次渲染都应该返回 true
    expect(result1.current).toBe(true);
    expect(result2.current).toBe(true);
  });

  it('should reset when component remounts', () => {
    const { result, rerender, unmount } = renderHook(() => useIsFirstRender());

    expect(result.current).toBe(true);

    rerender();
    expect(result.current).toBe(false);

    // 卸载组件
    unmount();

    // 重新挂载（新的 hook 实例）
    const { result: newResult } = renderHook(() => useIsFirstRender());
    expect(newResult.current).toBe(true);
  });
});
