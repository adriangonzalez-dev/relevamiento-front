import { useParams } from 'react-router-dom'
import { RowResult } from '../components/RowResult'
import { useData } from '../hooks/useData'
import { useEffect, useState } from 'react'
import { DataSheet } from '../hooks/useSheets'
import { ChartCountry } from '../components/ChartCountry'
import { BarGraphicCountry } from '../components/BarGraphicCountry'

export const ResultCountry = () => {
    const [newData, setNewData] = useState<DataSheet[]>()
    const {id} = useParams()
    const {data, isLoading} = useData()

    const getCountryTickets = () => {
      if(!isLoading){
        if(id){
          const countryData = data.filter(item => {
            if(item.country){
              return +item.country?.id === +id
            }
          });
          setNewData(countryData)
        }
      }
    }
    
    useEffect(() => {
      getCountryTickets()
    },[id, data])

    if(newData?.length === 0) {
      return <div>El país no tiene pedidos, aún...</div>
    }
  return (
    <section className='flex flex-col w-full mt-4'>
      <article className='flex justify-center items-center gap-2 flex-wrap'>
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
