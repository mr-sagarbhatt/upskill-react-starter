import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import SidebarItems from './TwoSidebarItems'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Two = () => {
  const navigate = useNavigate()
  useEffect(() => {}, [navigate('/ml-two/styled-components')])
  return (
    <article className="flex h-screen">
      <section className="w-full bg-zinc-50 p-4">
        <Outlet />
      </section>
      <Sidebar SidebarItems={SidebarItems}></Sidebar>
    </article>
  )
}

export default Two
