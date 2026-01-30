import { useCallback, useState, useEffect, useRef } from 'react';

/**
 * setState 更新参数类型
 */
export type SetStateAction<T extends object> = Partial<T> | ((prevState: T) => Partial<T>);

/**
 * setState 函数类型
 */
export type SetStateFn<T extends object> = (
  state: SetStateAction<T>,
  callback?: () => void
) => void;

/**
 * 模拟 class 组件的 setState 方法，支持部分更新和回调
 *
 * @param initialState - 初始状态对象或返回初始状态的函数
 * @returns [state, setState] - 当前状态和更新函数
 *
 * @example
 * ```tsx
 * const [state, setState] = useSetState({ name: '', age: 0 });
 *
 * // 部分更新（自动合并）
 * setState({ name: 'John' });
 *
 * // 函数式更新
 * setState(prev => ({ age: prev.age + 1 }));
 *
 * // 带回调（状态更新后执行）
 * setState({ name: 'Jane' }, () => console.log('Updated!'));
 * ```
 */
export default function useSetState<T extends object>(
  initialState: T | (() => T)
): [T, SetStateFn<T>] {
  const [state, setState] = useState<T>(initialState);
  const callbackRef = useRef<(() => void) | null>(null);

  const setMergeState = useCallback<SetStateFn<T>>((patch, callback) => {
    setState((prevState) => {
      const patchValue: Partial<T> = typeof patch === 'function' ? patch(prevState) : patch;
      return { ...prevState, ...patchValue };
    });

    if (callback) {
      callbackRef.current = callback;
    }
  }, []);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current();
      callbackRef.current = null;
    }
  });

  return [state, setMergeState];
}
