import { useEffect, useRef } from 'react'

type Callback = () => void

const useInterval = (callback: Callback, delay: number | null) => {
  const savedCallback = useRef<Callback>(() => { })

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)

      return () => {
        clearInterval(id)
      }
    }
  }, [delay])
}

export default useInterval