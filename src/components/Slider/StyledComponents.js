import styled from 'styled-components'

/**
 * main container
 * set dimensions (height, width)
 */

const MainSlider = styled.div`
  position: relative;
  height: ${(props) => props.height || '100vh'};
  width: ${(props) => props.width || '100vw'};
  margin: ${(props) => props.margin || '0 auto'}
  overflow: hidden;
`

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px || 100%;
  display: flex;
`

const Slide = styled.div`
  height: 100;
  width: 100%;
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export { MainSlider, SliderContent, Slide }
