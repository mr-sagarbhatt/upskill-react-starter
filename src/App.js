import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import One from './pages/One/One'
import Two from './pages/Two/Two'
import Props from './components/One/Props'
import States from './components/One/States'
import StyledComponent from './components/Two/StyledComponent'

function App() {
  return (
    <section>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/ml-one" element={<One></One>}>
            <Route path="props" element={<Props></Props>} />
            <Route path="states" element={<States></States>} />
          </Route>
          <Route path="/ml-two" element={<Two></Two>}>
            <Route path="styled-components" element={<StyledComponent></StyledComponent>} />
          </Route>
        </Routes>
      </Router>{' '}
    </section>
  )
}

export default App
