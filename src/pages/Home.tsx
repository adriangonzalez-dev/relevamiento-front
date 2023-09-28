import { Result } from '../components/Result'
import { Chart } from '../components/Chart'
import { BarGraphic } from '../components/BarGraphic'
import { useMetadata } from '../hooks/useMetadata'
import { Loader } from '../components/Loader'
import { useData } from '../hooks/useData'


export const Home = () => {


  const {isLoading:isLoadingMedata} = useMetadata()
  const {isLoading} = useData()


  return (
    <>
      
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
        
      
    </>
  )
}
