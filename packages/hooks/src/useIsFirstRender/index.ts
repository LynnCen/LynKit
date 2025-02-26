import { useRef, useEffect } from 'react'

function useIsFirstRender(): boolean {
  const isFirstRenderRef = useRef<boolean>(true)

  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])

  return isFirstRenderRef.current
}

export default useIsFirstRender