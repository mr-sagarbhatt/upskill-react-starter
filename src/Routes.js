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
          <Route path="slider" element={<Slider></Slider>} />
        </Route>
      </Routes>
    </Router>
  )
}
