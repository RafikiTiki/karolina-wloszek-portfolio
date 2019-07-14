import { useEffect, useRef } from "react"
import Hamster from "hamsterjs"
import { window, document } from 'browser-monads'
import { doNothing, throttle } from "../utils"

const getNumberOfSlidesToScroll = () => {
  if (window.innerWidth > 899) {
    return 2
  } else {
    return 1
  }
}

export default function (scrollThrottle = 400, numberOfSlides, hoveredSlideIndex, onSlideCallback = doNothing) {
  const sliderRef = useRef(null)
  useEffect(() => {
    const slickSliderRef = sliderRef.current
    const hamster = Hamster(document.getElementById('projects-page'))
    hamster.wheel(throttle((event, delta, deltaX, deltaY) => {

      if (deltaX < 0 || deltaY < 0) {
        slickSliderRef.slickPrev()
        const slidesToScroll = getNumberOfSlidesToScroll()
        const newHoveredSlideIndex = Math.abs(hoveredSlideIndex - slidesToScroll) % numberOfSlides
        // console.log('newHoveredSlideIndex', newHoveredSlideIndex)
        onSlideCallback(newHoveredSlideIndex)

      } else {
        slickSliderRef.slickNext()
        const slidesToScroll = getNumberOfSlidesToScroll()
        const newHoveredSlideIndex = (hoveredSlideIndex + slidesToScroll) % numberOfSlides
        // console.log('newHoveredSlideIndex', newHoveredSlideIndex)
        onSlideCallback(newHoveredSlideIndex)
      }
    }, scrollThrottle))

    return () => {
      hamster.unwheel()
    }
  }, [])

  return sliderRef
}