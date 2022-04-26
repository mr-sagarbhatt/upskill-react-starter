import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MilestoneOne from './pages/One/One'
import MilestoneTwo from './pages/Two/Two'
import Practice from './pages/Practice/Practice'
import StyledComponent from './components/Two/StyledComponent'
import SessionOne from './components/Practice/One'
import FetchApi from './components/Two/FetchApi/FetchApi'
import Slider from './components/Slider/Slider'

import { SessionOneProvider } from './context/session-one'

export default () => {
  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
  ]

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/ml-one" element={<MilestoneOne></MilestoneOne>}></Route>
        <Route path="/ml-two" element={<MilestoneTwo></MilestoneTwo>}>
          <Route path="styled-components" element={<StyledComponent></StyledComponent>} />
          <Route path="fetch-api" element={<FetchApi></FetchApi>}></Route>
        </Route>
        <Route path="/practice" element={<Practice></Practice>}>
          <Route
            path="session-1"
            element={
              <SessionOneProvider>
                <SessionOne></SessionOne>
              </SessionOneProvider>
            }
          />
          <Route
            path="slider"
            element={
              <Slider
                images={images}
                sliderHeight="50%"
                sliderWidth="100%"
                bgArrow="white"
                colorArrow="black"
                bgSlideDots="white"
                activeSlide="black"
                transitionTime="0.5"
              ></Slider>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}
