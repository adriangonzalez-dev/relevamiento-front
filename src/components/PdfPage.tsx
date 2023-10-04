

import { DataSheet } from '../context/data/dataContext'
import { BarGraphicCountry } from './BarGraphicCountry'
import { ChartCountry } from './ChartCountry'
import { RowResult } from './RowResult'
import banner from '../assets/Portada/banner.png'
import banner2 from '../assets/Portada/banner2.png'
import tecs from '../assets/Portada/Recurso 4.png'
import imageFooter from '../assets/Portada/Recurso 11@4x.png'
import { useEffect, useState } from 'react'


interface Props {
  data: DataSheet[] | undefined,
  images: { url: string; width: number | undefined; height: number | undefined; }[] | undefined
}

export const PdfPage = ({data, images}:Props) => {
  const [contentData, setContentData] = useState<DataSheet[] | undefined>([]);
  const [migrationData, setMigrationData] = useState<DataSheet[] | undefined>([]);
  const [displayData, setDisplayData] = useState<DataSheet[] | undefined>([]);
  
  
  
  useEffect(() => {
    const content = [366,130, 142, 138];
    const displays = [185, 171, 172];
    const migrations = [140,557];
    // Filtrar los datos de content
    const filteredContentData = data?.filter((item) => content.includes(+item.type.id));
    setContentData(filteredContentData);
  
    // Filtrar los datos de migrations
    const filteredMigrationData = data?.filter((item) => migrations.includes(+item.type.id));
    setMigrationData(filteredMigrationData);
  
    // Filtrar los datos de displays
    const filteredDisplayData = data?.filter((item) => displays.includes(+item.type.id));
    setDisplayData(filteredDisplayData);
  
  }, [ data ]);
  return (
    <div className="w-[210mm] h-[297mm] mx-auto relative page">
      <div className='mb-2 relative'>
        <img src={banner} alt="" />
        <p className='absolute bottom-12 left-32 text-4xl font-bold'>Solicitudes de contenido</p>
      </div>
    <div className="flex flex-row justify-center gap-2">
      <ChartCountry data={data} className={`w-1/2 p-2`} />
      <BarGraphicCountry data={data} className={`w-1/2 p-2`} />
    </div>
    <div className='page'>

      <div className={(images && images?.length > 0) ? 'flex flex-wrap w-[210mm] gap-1 my-2 px-2 justify-center' : 'hidden'}>
      {
      (images && images?.length > 0) && images?.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Image ${index}`}
          className={`flex-shrink-0 ${
            ((image?.width ?? 0) > (image?.height ?? 0)) ? 'w-auto h-12' : 'w-12 h-auto'
          } object-cover`}
        />
      ))
    }
      </div>
      {
        (contentData && contentData?.length > 0) ? 

        <div className="overflow-x-auto w-full mx-auto mt-4 ">
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
                contentData?.map(item => <RowResult row={item} key={item.id} />)
              }
              </tbody>
          </table>
        </div>
        :
        <p className='text-center text-2xl font-bold text-gray-700 mt-2 mb-2'>No existen datos de nuevo contenido</p>
      }
    </div>
    <div className='page'>
      {
        (migrationData && migrationData?.length > 0) &&
        <>
          <div className='relative'>
            <img src={banner2} alt="" />
            <p className='absolute bottom-4 left-32 font-bold text-2xl'>Nuevas Sucursales</p>
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mb-2">
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
                  migrationData?.map(item => <RowResult row={item} key={item.id} />)
                }
              </tbody>
          </table>
        </>
      }
      {
        (displayData && displayData?.length > 0) &&
        <>
          <div className='relative'>
          <img src={banner2} alt="" />
          <p className='absolute bottom-4 left-32 font-bold text-2xl'>Cambios o nuevas pantallas</p>
        </div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mb-2">
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
                displayData?.map(item => <RowResult row={item} key={item.id} />)
              }
            </tbody>
          </table>
        </>
      }
      <div className='flex w-full'>
            <div className='w-1/4 flex items-center justify-center'>
              <img src={tecs} alt="" className='w-20' />
            </div>
            <div  className='w-3/4 relative flex items-center justify-start'>
              <div className='flex flex-col justify-center items-start gap-2'>
                {
                  (migrationData && migrationData?.length > 0) && <p className='text-xl font-bold'>Cantidad de nuevas sucursales: {migrationData?.length ?? 0}</p>
                }
                <a href="https://www.google.com" className='btn btn-outline btn-warning'>Modulación</a>
              </div>
              <img src={imageFooter} alt="" className='absolute w-32 right-0 bottom-0'/>
            </div>
      </div>
    </div>
  </div>
  )
}
