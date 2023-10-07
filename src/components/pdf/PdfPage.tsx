

import { DataSheet } from '../../context/data/dataContext'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDictionary } from '../../hooks/useDictionary'
import { ChartPdf } from './ChartPdf'
import { BarGraphicPdf } from './BarGraphicPdf'
import { RestData } from './RestData'
import { RowResultPdf } from './RowResultPdf'
import mcd from '../../assets/mcd.png';
import dex from '../../assets/dex.png'


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
    <div className="w-[210mm] h-[275mm] mx-auto relative p-2">
    <div className="flex flex-row justify-center gap-2">
      <ChartPdf data={data} className={`w-1/3 h-50`} />
      <BarGraphicPdf data={data} className={`w-1/3 h-50`} />
      <RestData className={`w-1/3 h-50`} 
      displayData={displayData?.length} 
      displayPending={displayData?.filter(item=>!item.implementation_date).length}
      migrationData={migrationData?.length}
      migrationPending={migrationData?.filter(item=>!item.implementation_date).length}/>
    </div>
    <div>

      <div className={(images && images?.length > 0) ? 'border-2 border-gray-200 rounded p-1 flex flex-wrap w-full gap-1 my-2 px-2 justify-center' : 'hidden'}>
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
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left text-xs">
                  {page.tableHeads.request}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left text-xs">
                  {page.tableHeads.category}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left text-xs">
                  {page.tableHeads.via}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left text-xs">
                  {page.tableHeads.state}
                </th>
{/*                 <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.request_date}
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">
                  {page.tableHeads.implementation_date}
                </th> */}
              </tr>
            </thead>
              <tbody className="divide-y divide-gray-200">
              {
                contentData?.map(item => <RowResultPdf row={item} key={item.id} />)
              }
              </tbody>
          </table>
        </div>
        :
        <p className='text-center text-2xl font-bold text-gray-700 mt-2 mb-2'>{page.noDataContent}</p>
      }
    </div>
      <footer className='absolute bottom-2 right-2 flex w-32 items-center gap-2 justify-center'>
        <img src={dex} alt="dex" className='w-12 h-auto'/>
        <img src={mcd} alt="mcd" className='w-12 h-auto opacity-50'/>
      </footer>
  </div>
  )
}
