import { useRef } from 'react'

type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean

const defalutShouldUpdate = <T>(prev?: T, next?: T) => prev !== next

function usePrevious<T>(
  state: T,
  shouldUpdateFun: ShouldUpdateFunc<T> = defalutShouldUpdate,
): T | undefined {
  const prev = useRef<T>(null)
  const cur = useRef<T>(null)

  if (shouldUpdateFun(cur.current, state)) {
    prev.current = cur.current
    cur.current = state
  }
  return prev.current
}

export default usePrevious