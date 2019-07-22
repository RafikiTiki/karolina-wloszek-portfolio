import { useEffect, useState } from "react"
import { document, window } from "browser-monads"
import smoothscroll from "smoothscroll-polyfill"

export function useFullPageScroll() {
  const [isOnBottomPage, onSetIsOnBottomPage] = useState(false)
  smoothscroll.polyfill()

  useEffect(() => {
    let yDown = null

    const scrollToSecondPage = () => {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      })
    }

    const scrollToFirstPage = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }

    const handleScroll = event => {
      if (isOnBottomPage) {
        if (event.deltaY < 0) {
          event.preventDefault()
          onSetIsOnBottomPage(false)
          scrollToFirstPage()
        }
      } else if (event.deltaY > 0) {
        event.preventDefault()
        scrollToSecondPage()
        onSetIsOnBottomPage(true)
      }
    }

    const handleTouchStart = event => {
      yDown = event.touches[0].clientY
    }

    const handleTouchMove = event => {
      if (!yDown) {
        return
      }

      const yUp = event.touches[0].clientY
      const yDiff = yDown - yUp

      if (yDiff > 0) {
        if (!isOnBottomPage) {
          event.preventDefault()
          scrollToSecondPage()
          onSetIsOnBottomPage(true)
        }
      } else {
        if (isOnBottomPage) {
          event.preventDefault()
          onSetIsOnBottomPage(false)
          scrollToFirstPage()
        }
      }

      yDown = null
    }

    document.addEventListener("wheel", handleScroll)
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      document.removeEventListener("wheel", handleScroll)
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove, { passive: false })
    }
  }, [isOnBottomPage])

  return !isOnBottomPage
}