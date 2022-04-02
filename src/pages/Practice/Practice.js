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
    <article className="flex h-screen">
      <section className="w-full p-4 bg-zinc-50">
        <Outlet />
      </section>
      <Sidebar SidebarItems={SidebarItems}></Sidebar>
    </article>
  )
}

export default Practice
