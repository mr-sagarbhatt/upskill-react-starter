import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import SidebarItems from './TwoSidebarItems'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Two = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/ml-two/styled-components')
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

export default Two
