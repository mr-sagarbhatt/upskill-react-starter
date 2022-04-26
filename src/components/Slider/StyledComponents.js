import styled from 'styled-components'

const MainSlider = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => props.sliderHeight || '100%'};
  width: ${(props) => props.sliderWidth || '100%'};
  margin: '0 auto'};
`

const SliderContent = styled.div`
  position: relative;
  left: -${(props) => props.left}%;
  /* transform: translateX(-${(props) => props.translate}px); */
  transition: left ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}%;
  display: flex;
`

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Arrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 20px;
  width: 20px;
  justify-content: center;
  background: ${({ bgArrow }) => (bgArrow ? bgArrow : 'white')};
  color: ${({ colorArrow }) => (colorArrow ? colorArrow : 'black')};
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  & > & {
    transform: translateX(${({ direction }) => (direction === 'left' ? '-2' : '2')}px);
    &:focus {
      outline: 0;
    }
  }
`

const Dot = styled.span`
  padding: 7px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ active, bgSlideDots, activeSlide }) =>
    active ? (activeSlide ? activeSlide : 'black') : bgSlideDots ? bgSlideDots : 'white'};
`

const Dots = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { MainSlider, SliderContent, Slide, Arrow, Dot, Dots }

/**
 * REF: https://betterprogramming.pub/build-an-image-slider-with-react-es6-264368de68e4
 */
