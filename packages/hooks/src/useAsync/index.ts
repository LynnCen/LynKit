import { useEffect, useCallback } from 'react'
import useSetState from '../useSetState'

export function isFunction<T>(value: T): boolean {
  return typeof value === 'function'
}

interface AsyncState<T> {
  loading: boolean
  data?: T
  isError: boolean
  error?: Error
}
type Args = any[]
type AsyncFunction<T, A extends Args> = A['length'] extends 0
  ? () => Promise<T>
  : (...args: A) => Promise<T>
type TriggerPromiseReturn<T> = (...args: Args) => Promise<T | void>
type ExtendType<T, E extends Record<string, any>> = T & E
const initState = {
  loading: false,
  data: undefined,
  error: undefined,
  isError: false,
}
function useAsync<T, A extends Args>(
  asyncFunction: AsyncFunction<T, A> | T,
  initialState?: T,
  immediate = false,
): ExtendType<AsyncState<T>, Record<'trigger', TriggerPromiseReturn<T>>> {
  const [state, setState] = useSetState<AsyncState<T>>({
    ...initState,
    data: initialState,
  })

  const trigger = useCallback<TriggerPromiseReturn<T>>(
    async (...args: A) => {
      setState({ ...initState, loading: true })
      // 兼容数据预加载
      return (
        isFunction(asyncFunction)
          ? (asyncFunction as AsyncFunction<T, A>)(...args)
          : Promise.resolve(asyncFunction as T)
      )
        .then((response: T) => {
          setState({ data: response })
          return response
        })
        .catch((error: Error) => {
          setState({ error: error, isError: true })
        })
        .finally(() => {
          setState({
            loading: false,
          })
        })
    },
    [asyncFunction],
  )

  // 在组件加载时立即执行（如果 immediate 为 true）
  useEffect(() => {
    if (immediate) {
      ; (trigger as () => Promise<T>)()
    }
  }, [trigger, immediate])

  return { ...state, trigger }
}
export default useAsync