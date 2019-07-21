import { useEffect } from 'react'
import { document } from 'browser-monads'

export default function useSetBodyOverflowProp(overflowValue) {
  useEffect(() => {
    const prevOverflowVal = document.body.style.overflow || 'visible'
    document.body.style.overflow = overflowValue

    return () => {
      document.body.style.overflow = prevOverflowVal
    }
  }, [])
}