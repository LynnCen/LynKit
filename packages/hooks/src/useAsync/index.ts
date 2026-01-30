import { useEffect, useCallback } from 'react';
import useSetState from '../useSetState';
import { isFunction } from '../utils';

/**
 * 异步状态
 */
export interface AsyncState<T> {
  /** 是否正在加载 */
  loading: boolean;
  /** 请求返回的数据 */
  data?: T;
  /** 是否发生错误 */
  isError: boolean;
  /** 错误对象 */
  error?: Error;
}

/**
 * useAsync 返回值类型
 */
export interface UseAsyncReturn<T, A extends unknown[]> extends AsyncState<T> {
  /** 手动触发异步函数 */
  trigger: (...args: A) => Promise<T | void>;
}

const initialState: AsyncState<unknown> = {
  loading: false,
  data: undefined,
  error: undefined,
  isError: false,
};

/**
 * 管理异步操作状态的 Hook
 *
 * @param asyncFunction - 异步函数或直接值
 * @param initialData - 初始数据
 * @param immediate - 是否立即执行，默认 false
 * @returns 包含 loading、data、error、isError 和 trigger 的对象
 *
 * @example
 * ```tsx
 * // 基础用法
 * const { loading, data, error, trigger } = useAsync(fetchUserList);
 *
 * // 手动触发
 * <button onClick={() => trigger()}>加载数据</button>
 *
 * // 立即执行
 * const { loading, data } = useAsync(fetchUserList, undefined, true);
 *
 * // 带参数的异步函数
 * const { trigger } = useAsync((id: string) => fetchUser(id));
 * trigger('user-123');
 *
 * // 预加载数据
 * const { data } = useAsync(cachedData); // 直接传入非函数值
 * ```
 */
export default function useAsync<T, A extends unknown[] = []>(
  asyncFunction: ((...args: A) => Promise<T>) | T,
  initialData?: T,
  immediate = false
): UseAsyncReturn<T, A> {
  const [state, setState] = useSetState<AsyncState<T>>({
    ...initialState,
    data: initialData,
  } as AsyncState<T>);

  const trigger = useCallback(
    async (...args: A): Promise<T | void> => {
      setState({ ...initialState, loading: true } as AsyncState<T>);

      try {
        // 兼容数据预加载：如果不是函数，直接返回值
        const response = (
          isFunction(asyncFunction)
            ? await asyncFunction(...args)
            : await Promise.resolve(asyncFunction)
        ) as T;

        setState({ data: response, loading: false });
        return response;
      } catch (error) {
        setState({
          error: error as Error,
          isError: true,
          loading: false,
        });
      }
    },
    [asyncFunction, setState]
  );

  // 立即执行
  useEffect(() => {
    if (immediate) {
      trigger(...([] as unknown as A));
    }
  }, [immediate, trigger]);

  return { ...state, trigger };
}
