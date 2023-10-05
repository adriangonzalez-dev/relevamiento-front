

import { DataSheet } from '../context/data/dataContext'
import { BarGraphicCountry } from './BarGraphicCountry'
import { ChartCountry } from './ChartCountry'
import { banner, banner2, tecs } from '../assets/Portada'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCountryData } from '../hooks/useCountryData'
import { useDictionary } from '../hooks/useDictionary'
import { RowResultCountry } from './RowResultCountry'


interface Props {
  data: DataSheet[] | undefined,
  images: { url: string; width: number | undefined; height: number | undefined; }[] | undefined
}

export const PdfPage = ({data, images}:Props) => {
  const {id} = useParams()
  const [contentData, setContentData] = useState<DataSheet[] | undefined>([]);
  const [migrationData, setMigrationData] = useState<DataSheet[] | undefined>([]);
  const [displayData, setDisplayData] = useState<DataSheet[] | undefined>([]);
  const { page } = useDictionary({id:id ? +id : undefined})
  const {dataCountry} = useCountryData({id:id ? +id : undefined})
  
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
        <p className='absolute bottom-12 left-32 text-4xl font-bold'>{page.title}</p>
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
                  {page.tableHeads.request}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.category}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.request_date}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.implementation_date}
                </th>
              </tr>
            </thead>
              <tbody className="divide-y divide-gray-200">
              {
                contentData?.map(item => <RowResultCountry row={item} key={item.id} />)
              }
              </tbody>
          </table>
        </div>
        :
        <p className='text-center text-2xl font-bold text-gray-700 mt-2 mb-2'>{page.noDataContent}</p>
      }
    </div>
    <div className='page'>
      {
        (migrationData && migrationData?.length > 0) &&
        <>
          <div className='relative'>
            <img src={banner2} alt="" />
            <p className='absolute bottom-4 left-32 font-bold text-2xl'>{page.subtitleOne}</p>
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mb-2">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                    {page.tableHeads.request}
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                    {page.tableHeads.category}
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                    {page.tableHeads.request_date}
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                    {page.tableHeads.implementation_date}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {
                  migrationData?.map(item => <RowResultCountry row={item} key={item.id} />)
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
          <p className='absolute bottom-4 left-32 font-bold text-2xl'>{page.subtitleTwo}</p>
        </div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mb-2">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.request}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.category}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.request_date}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.implementation_date}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {
                displayData?.map(item => <RowResultCountry row={item} key={item.id} />)
              }
            </tbody>
          </table>
        </>
      }
      <div className='flex w-full'>
            <div className='w-1/4 flex items-center justify-center'>
              <img src={tecs} alt="" className='w-32' />
            </div>
            <div  className='w-3/4 relative flex items-center justify-start'>
              <div className='flex flex-col justify-center items-start gap-2'>
                <div className='w-full flex items-center flex-col relative left-20'>
                  {
                    (migrationData && migrationData?.length > 0) && <p className='text-xl font-bold'>{`${page.totalMigrations}: ${migrationData?.length ?? 0}`}</p>
                  }
                  <a href="https://www.google.com" className='btn btn-outline btn-warning'>{page.modulacion}</a>
                </div>
              </div>
              <img src={dataCountry?.footer} alt="" className='absolute w-32 right-2 bottom-2'/>
            </div>
      </div>
    </div>
  </div>
  )
}
