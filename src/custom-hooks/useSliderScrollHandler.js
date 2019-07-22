import { useEffect, useRef } from "react"
import Hamster from "hamsterjs"
import { window, document } from 'browser-monads'
import { doNothing, throttle } from "../utils"

// export default function (scrollThrottle = 400, numberOfSlides, hoveredSlideIndex, onSlideCallback = doNothing) {
export default function (scrollThrottle = 400, onNextCallback, onPrevCallback) {
  const sliderRef = useRef(null)
  useEffect(() => {
    const slickSliderRef = sliderRef.current
    // TODO: GET RID OF HAMSTERJS AND USE NORMAL WHEEL EVENT
    const hamster = Hamster(document.getElementById('projects-page'))
    hamster.wheel(throttle((event, delta, deltaX, deltaY) => {

      if (deltaX < 0 || deltaY < 0) {
        slickSliderRef.slickPrev()
        // const slidesToScroll = getNumberOfSlidesToScroll()
        // const newHoveredSlideIndex = Math.abs(hoveredSlideIndex - slidesToScroll) % numberOfSlides
        // onSlideCallback(newHoveredSlideIndex)
        onPrevCallback()

      } else {
        slickSliderRef.slickNext()
        // const slidesToScroll = getNumberOfSlidesToScroll()
        // const newHoveredSlideIndex = (hoveredSlideIndex + slidesToScroll) % numberOfSlides
        // onSlideCallback(newHoveredSlideIndex)
        onNextCallback()
      }
    }, scrollThrottle))

    return () => {
      hamster.unwheel()
    }
  }, [])

  return sliderRef
}