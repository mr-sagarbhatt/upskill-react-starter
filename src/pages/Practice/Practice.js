import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarItems from './PracticeSidebarItems'
import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'

const Practice = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/practice/session-1')
  }, [])
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
