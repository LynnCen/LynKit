import { useRef } from 'react';

/**
 * 判断是否为组件首次渲染
 *
 * @returns 首次渲染返回 true，后续渲染返回 false
 *
 * @example
 * ```tsx
 * const isFirstRender = useIsFirstRender();
 *
 * useEffect(() => {
 *   if (isFirstRender) {
 *     console.log('Component mounted');
 *   } else {
 *     console.log('Component updated');
 *   }
 * });
 *
 * // 跳过首次渲染的副作用
 * useEffect(() => {
 *   if (!isFirstRender) {
 *     fetchData();
 *   }
 * }, [dependency]);
 * ```
 */
export default function useIsFirstRender(): boolean {
  const isFirstRef = useRef(true);

  if (isFirstRef.current) {
    isFirstRef.current = false;
    return true;
  }

  return false;
}
