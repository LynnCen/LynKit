import { useRef } from 'react';

/**
 * 自定义比较函数类型
 */
export type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;

const defaultShouldUpdate = <T>(prev?: T, next?: T) => !Object.is(prev, next);

/**
 * 获取状态的前一个值
 *
 * @param state - 要追踪的状态值
 * @param shouldUpdate - 可选的自定义比较函数，决定是否更新前值
 * @returns 状态的前一个值，首次渲染返回 undefined
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 *
 * console.log(`Current: ${count}, Previous: ${prevCount}`);
 *
 * // 自定义比较函数（仅当变化超过 5 时才更新）
 * const prevValue = usePrevious(value, (prev, next) => {
 *   return prev !== undefined && Math.abs(next - prev) > 5;
 * });
 * ```
 */
export default function usePrevious<T>(
  state: T,
  shouldUpdate: ShouldUpdateFunc<T> = defaultShouldUpdate
): T | undefined {
  const prevRef = useRef<T | undefined>(undefined);
  const curRef = useRef<T | undefined>(undefined);

  if (shouldUpdate(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}
