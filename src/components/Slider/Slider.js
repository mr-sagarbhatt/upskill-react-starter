import { useState } from 'react'
import { MainSlider, SliderContent, Slide } from './StyledComponents'

const Slider = () => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  })
  const { translate, transition } = state

  return (
    <MainSlider>
      <SliderContent translate={translate} transition={transition} width={getWidth()}></SliderContent>
    </MainSlider>
  )
}

export default Slider
