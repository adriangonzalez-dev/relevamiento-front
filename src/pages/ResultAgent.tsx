import { useParams } from 'react-router-dom'
import { Stats } from '../components/Stats'
import { useEffect, useState } from 'react'
import { useData } from '../hooks/useData'
import { DataSheet } from '../context/data/dataContext'
import { ChartCountry } from '../components/ChartCountry'
import { BarGraphicCountry } from '../components/BarGraphicCountry'
import { RowResult } from '../components/RowResult'


export const ResultAgent = () => {
  const [newData, setNewData] = useState<DataSheet[]>()
  const {id} = useParams()
  const {data, isLoading} = useData()

  
  useEffect(() => {
    const getAgentTickets = () => {
      if(!isLoading){
        if(id){
          const agentData = data.filter(item => {
            if(item.country){
              return +item.agent?.id === +id
            }
          });
          setNewData(agentData)
        }
      }
    }
    getAgentTickets()
  },[id, data, isLoading])

  if(newData?.length === 0) {
    return <div>El agente no tiene pedidos, aún...</div>
  }
  return (
    <section className='flex flex-col w-full mt-4'>
      <Stats data={newData}/>
      <article className='flex justify-center items-center gap-2 flex-wrap mt-4' >
              <ChartCountry data={newData}/>
              <BarGraphicCountry data={newData}/>
      </article>
      <div className="overflow-x-auto w-5/6 mx-auto mt-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                Pedido
              </th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                Segmento
              </th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                País
              </th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                Fecha de solicitud
              </th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                Fecha de implementación
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              newData?.map(item=><RowResult row={item} key={item.id}/>)
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
