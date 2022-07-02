import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ SidebarItems }) => {
  return (
    <ul className="flex flex-col lg:w-1/3 bg-zinc-100 border-l border-zinc-200 p-8">
      {SidebarItems.map((item, index) => (
        <li key={index} className="sidebarItem">
          <NavLink
            to={item.route}
            className={({ isActive }) => (isActive ? 'font-bold sidebarItem__activeItem my-4' : 'text-black my-4')}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
