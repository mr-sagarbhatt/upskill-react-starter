import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MilestoneOne from './pages/One/One'
import MilestoneTwo from './pages/Two/Two'
import Practice from './pages/Practice/Practice'
import Props from './components/One/Props'
import States from './components/One/States'
import StyledComponent from './components/Two/StyledComponent'
import Components from './components/One/Components'
import SessionOne from './components/Practice/One'

export default () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/ml-one" element={<MilestoneOne></MilestoneOne>}>
          <Route path="props" element={<Props></Props>} />
          <Route path="states" element={<States></States>} />
          <Route path="components" element={<Components></Components>} />
        </Route>
        <Route path="/ml-two" element={<MilestoneTwo></MilestoneTwo>}>
          <Route path="styled-components" element={<StyledComponent></StyledComponent>} />
        </Route>
        <Route path="/practice" element={<Practice></Practice>}>
          <Route path="session-1" element={<SessionOne></SessionOne>} />
        </Route>
      </Routes>
    </Router>
  )
}
