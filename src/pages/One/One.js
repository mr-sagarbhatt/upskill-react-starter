import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SidebarItems from './OneSidebarItems'

const One = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/ml-one/props')
  }, [])

  return (
    <article className="flex min-h-[calc(100vh-56px)] flex-col lg:flex-row">
      <section className="w-full bg-zinc-50 p-4 order-2 lg:-order-none">
        <Outlet />
      </section>
      <Sidebar SidebarItems={SidebarItems}></Sidebar>
    </article>
  )
}

export default One
