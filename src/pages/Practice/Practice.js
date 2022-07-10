import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarItems from './PracticeSidebarItems'

const Practice = () => {
  // const location = useLocation()
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (location.pathname === '/practice') {
  //     navigate('/practice/session-1')
  //   }
  // }, [location])

  return (
    <article className="flex min-h-[calc(100vh-56px)] flex-col lg:flex-row">
      <section className="w-full p-4 bg-zinc-50 order-2 lg:-order-none">
        <Outlet />
      </section>
      <Sidebar SidebarItems={SidebarItems}></Sidebar>
    </article>
  )
}

export default Practice
