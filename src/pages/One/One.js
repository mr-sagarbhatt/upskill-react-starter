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
    <article className="flex h-screen">
      <section className="w-full bg-zinc-50 p-4">
        <Outlet />
      </section>
      <Sidebar SidebarItems={SidebarItems}></Sidebar>
    </article>
  )
}

export default One
