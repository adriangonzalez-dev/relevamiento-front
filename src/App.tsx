

import { useState } from 'react'
import { Header } from './components/Header'
import { Result } from './components/Result'
import { Sidebar } from './components/Sidebar'
import { Modal } from './components/Modal'
import { LegendCard } from './components/Chart'



function App() {

  const [activeForm, setActiveForm] = useState<boolean>(false)

  const handleActiveForm = () => {
    setActiveForm(!activeForm)
  }

  return (
    <>
      <Header handleActiveForm={handleActiveForm}/>
      <main className='flex w-full'>
        <Sidebar/>
        
          <section className='w-5/6 flex flex-col gap-4 p-4'>
            <article className='flex justify-center items-center gap-2 flex-wrap'>
              <LegendCard/>
 
            </article>
            <Result/>
        </section>
        {
          activeForm && <Modal handleActiveForm={handleActiveForm}/>
        }
      </main>
    </>
  )
}

export default App
