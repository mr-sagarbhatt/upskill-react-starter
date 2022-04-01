import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="p-4 lg:text-xl text-white bg-zinc-800">
      <ul className="flex flex-wrap gap-4 lg:gap-8 place-content-center">
        <li className="cursor-pointer hover:text-sky-300">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-sky-300' : 'text-white')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/ml-one" className={({ isActive }) => (isActive ? 'text-sky-300' : 'text-white')}>
            Milestone 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/ml-two" className={({ isActive }) => (isActive ? 'text-sky-300' : 'text-white')}>
            Milestone 2
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
