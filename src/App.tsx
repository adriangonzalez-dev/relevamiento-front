

import { useState } from 'react'
import { Header } from './components/Header'
import { Result } from './components/Result'
import { Sidebar } from './components/Sidebar'
import { Modal } from './components/Modal'
import { Chart } from './components/Chart'
import { BarGraphic } from './components/BarGraphic'
import { useMetadata } from './hooks/useMetadata'
import { Loader } from './components/Loader'
import { useData } from './hooks/useData'
import { Toaster } from 'sonner'

function App() {

  const [activeForm, setActiveForm] = useState<boolean>(false)
  const {isLoading:isLoadingMedata} = useMetadata()
  const {isLoading} = useData()

  const handleActiveForm = () => {
    setActiveForm(!activeForm)
  }

  return (
    <>
      <Header handleActiveForm={handleActiveForm}/>
      <main className='flex w-full'>
        <Sidebar/>
        {
          (isLoading && isLoadingMedata) ? 
          <div className='flex items-center justify-center w-full'>
            <Loader/> 
          </div>:
          <section className='w-5/6 flex flex-col gap-4 p-4'>
            <article className='flex justify-center items-center gap-2 flex-wrap'>
              <Chart/>
              <BarGraphic/>
            </article>
            <Result/>
        </section>
        }
        {
          activeForm && <Modal handleActiveForm={handleActiveForm}/>
        }
      </main>
      <Toaster richColors/>
    </>
  )
}

export default App
