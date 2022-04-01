import { NavLink } from 'react-router-dom'

const Sidebar = ({ SidebarItems }) => {
  return (
    <ul className="flex flex-col p-8 w-1/3 bg-zinc-100 border-l border-zinc-200 list-disc">
      {SidebarItems.map((item, index) => (
        <li key={index}>
          <NavLink to={item.route} className={({ isActive }) => (isActive ? 'font-bold' : 'text-black')}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
