import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const location = useLocation()
  const [header, setHeader] = useState(false)

  const handleHeader = () => {
    setHeader((prev) => !prev)
  }

  return (
    <nav className="p-4 md:text-xl bg-zinc-800 nav">
      <div onClick={handleHeader}>
        {header ? (
          <FaTimes className="md:hidden" color="white"></FaTimes>
        ) : (
          <FaBars className="md:hidden" color="white"></FaBars>
        )}
      </div>
      <ul
        className={`flex gap-2 place-items-center place-content-center header flex-col md:flex-row ${
          header ? 'flex' : 'hidden md:flex'
        }`}
      >
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
