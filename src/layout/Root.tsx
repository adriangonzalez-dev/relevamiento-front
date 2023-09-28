import { useState } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Toaster } from 'sonner'
import { Outlet } from 'react-router-dom'
import { Modal } from '../components/Modal'

export const Root = () => {
    const [activeForm, setActiveForm] = useState<boolean>(false)
    const handleActiveForm = () => {
        setActiveForm(!activeForm)
      }

  return (
    <>
        <Header handleActiveForm={handleActiveForm}/>
            <main className='flex w-full'>
                <Sidebar/>
                <Outlet/>
                {
                    activeForm && <Modal handleActiveForm={handleActiveForm}/>
                }
            </main>
        <Toaster richColors/>
    </>
  )
}
