import { useEffect, useRef } from 'react';

/**
 * 设置定时器执行回调函数
 *
 * @param callback - 定时器执行的回调函数
 * @param delay - 定时器间隔（毫秒），传入 null 可暂停定时器
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 * const [isRunning, setIsRunning] = useState(true);
 *
 * // 每秒增加计数
 * useInterval(() => {
 *   setCount(c => c + 1);
 * }, isRunning ? 1000 : null);
 *
 * // 暂停/恢复
 * <button onClick={() => setIsRunning(!isRunning)}>
 *   {isRunning ? 'Pause' : 'Resume'}
 * </button>
 * ```
 */
export default function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>(callback);

  // 保存最新的回调函数
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 设置定时器
  useEffect(() => {
    if (delay === null) {
      return;
    }

    const tick = () => {
      savedCallback.current();
    };

    const id = setInterval(tick, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
