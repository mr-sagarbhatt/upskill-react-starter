import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <nav className="p-4 md:text-xl bg-zinc-800 nav">
      <ul className="flex flex-wrap gap-2 place-items-center place-content-center header flex-col md:flex-row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-sky-300 cursor-default header__activeItem px-4'
                : 'text-white hover:text-sky-300 transition-colors px-4'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ml-one/topics"
            className={({ isActive }) =>
              isActive || location.pathname.includes('/ml-one')
                ? 'text-sky-300 cursor-default header__activeItem px-4'
                : 'text-white hover:text-sky-300 transition-colors px-4'
            }
          >
            Milestone 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ml-two/topics"
            className={({ isActive }) =>
              isActive || location.pathname.includes('/ml-two')
                ? 'text-sky-300 cursor-default header__activeItem px-4'
                : 'text-white hover:text-sky-300 transition-colors px-4'
            }
          >
            Milestone 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/practice/session-1"
            className={({ isActive }) =>
              isActive || location.pathname.includes('/practice')
                ? 'text-sky-300 cursor-default header__activeItem px-4'
                : 'text-white hover:text-sky-300 transition-colors px-4'
            }
          >
            Practice
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exercise"
            className={({ isActive }) =>
              isActive
                ? 'text-sky-300 cursor-default header__activeItem px-4'
                : 'text-white hover:text-sky-300 transition-colors px-4'
            }
          >
            Exercise
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
