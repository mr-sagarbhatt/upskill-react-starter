import { useState } from 'react'
import { MainSlider, SliderContent, Slide, Arrow, Dot, Dots } from './StyledComponents'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'

const Slider = ({
  images,
  sliderHeight,
  sliderWidth,
  bgArrow,
  colorArrow,
  bgSlideDots,
  activeSlide,
  transitionTime,
}) => {
  const getWidth = () => 100
  const [state, setState] = useState({
    activeIndex: 0,
    left: 0,
    transition: transitionTime ? transitionTime : 0.45,
  })
  const { left, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        left: 0,
        activeIndex: 0,
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      left: (activeIndex + 1) * getWidth(),
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        left: (images.length - 1) * getWidth(),
        activeIndex: images.length - 1,
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      left: (activeIndex - 1) * getWidth(),
    })
  }

  return (
    <MainSlider sliderHeight={sliderHeight} sliderWidth={sliderWidth}>
      <SliderContent left={left} transition={transition} width={getWidth() * images.length}>
        {images.map((slide, index) => (
          <Slide key={slide + index} content={slide}></Slide>
        ))}
      </SliderContent>
      <Arrow direction="left" onClick={prevSlide} bgArrow={bgArrow} colorArrow={colorArrow}>
        <FaChevronCircleLeft></FaChevronCircleLeft>
      </Arrow>
      <Arrow direction="right" onClick={nextSlide} bgArrow={bgArrow} colorArrow={colorArrow}>
        <FaChevronCircleRight></FaChevronCircleRight>
      </Arrow>
      <Dots>
        {images.map((slide, i) => (
          <Dot
            key={slide}
            active={activeIndex === i}
            onClick={() => setState({ ...state, activeIndex: i, left: i * getWidth() })}
            bgSlideDots={bgSlideDots}
            activeSlide={activeSlide}
          />
        ))}
      </Dots>
    </MainSlider>
  )
}

export default Slider
