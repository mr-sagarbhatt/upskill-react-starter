import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
// * Milestone 1
import MilestoneOne from './pages/One/One'
import TopicsML1 from './components/One/Topics/Topics'
// * Milestone 2
import MilestoneTwo from './pages/Two/Two'
import StyledComponent from './components/Two/StyledComponent'
import FetchApi from './components/Two/FetchApi/FetchApi'
import Debug from './components/Two/Debug/Debug'
import Deploy from './components/Two/Deploy/Deploy'
import TopicsML2 from './components/Two/Topics/Topics'
// * Practice
import Practice from './pages/Practice/Practice'
import SessionOne from './components/Practice/One'
import Slider from './components/Slider/Slider'
// * Exercise
import Exercise from './pages/Exercise/Exercise'
// * 404 Error
import PageNotFound from './pages/PageNotFound/PageNotFound'

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
        {/* // * Milestone 1 */}
        <Route path="/ml-one" element={<MilestoneOne></MilestoneOne>}>
          <Route path="topics" element={<TopicsML1></TopicsML1>}></Route>
        </Route>
        {/* // * Milestone 2 */}
        <Route path="/ml-two" element={<MilestoneTwo></MilestoneTwo>}>
          <Route path="topics" element={<TopicsML2></TopicsML2>}></Route>
          <Route path="styled-components" element={<StyledComponent></StyledComponent>}></Route>
          <Route path="fetch-api" element={<FetchApi></FetchApi>}></Route>
          <Route path="debug" element={<Debug></Debug>}></Route>
          <Route path="deploy" element={<Deploy></Deploy>}></Route>
        </Route>
        {/* // * Practice */}
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
                sliderHeight="50vh"
                sliderWidth="100%"
                bgArrow="white"
                colorArrow="black"
                bgSlideDots="white"
                activeSlide="black"
                transitionTime="1"
              ></Slider>
            }
          />
        </Route>
        {/* // * Exercise */}
        <Route path="exercise" element={<Exercise></Exercise>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </Router>
  )
}
