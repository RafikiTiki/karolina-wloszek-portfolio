import { useEffect, useState } from 'react'
import Hamster from "hamsterjs"
import { window } from 'browser-monads'
import smoothscroll from 'smoothscroll-polyfill'

export function useFullPageScroll() {
  const [isOnBottomPage, onSetIsOnBottomPage] = useState(false)
  smoothscroll.polyfill()

  useEffect(() => {
    // if (typeof document !== `undefined` && typeof window !== 'undefined') {
      const scrollToSecondPage = () => {
        const pageHeight = window.innerHeight
        window.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: 'smooth',
        })
      }

      const scrollToFirstPage = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }

      const hamster = Hamster(document.getElementById('index-page'))

      hamster.wheel((event, delta, deltaX, deltaY) => {
        event.preventDefault()
        if (isOnBottomPage) {
          onSetIsOnBottomPage(false)
          scrollToFirstPage()
        } else {
          scrollToSecondPage()
          onSetIsOnBottomPage(true)
        }
      })

      return () => {
        hamster.unwheel()
      }
  }, [isOnBottomPage])

  return !isOnBottomPage
}