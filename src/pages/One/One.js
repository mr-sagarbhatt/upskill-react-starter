import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarItems from './OneSidebarItems'

const One = () => {
  return (
    <article className="flex min-h-[calc(100vh-56px)] flex-col lg:flex-row">
      <section className="w-full bg-zinc-50 p-4 order-2 lg:-order-none">
        {/* This element will render either <MilestoneOne> when the URL is "/ml-one" */}
        <Outlet />
      </section>
      <Sidebar SidebarItems={SidebarItems}></Sidebar>
    </article>
  )
}

export default One
