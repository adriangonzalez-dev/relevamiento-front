import { useParams } from "react-router-dom"
import { DataSheet } from "../../context/data/dataContext"
import { useDictionary } from "../../hooks/useDictionary"


interface Props {
    row:DataSheet
}

export const RowResultPdf = ({row}:Props) => {
    const {id} = useParams()
    const {page} = useDictionary({id: id ? +id : undefined})
  return (
      <tr className={` text-xs w-[291] 'odd:bg-gray-50'}`}>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 overflow-hidden text-overflow-ellipsis">
              {row.request}
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 ">{row.type ? row.type.name : 'Sin categoría'}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 ">{row.via && row.via.name}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 ">
            <span className={`
            inline-flex items-center justify-center rounded-full px-2.5 py-0.5 
            ${row.implementation_date ? 'bg-emerald-100 text-emerald-700' : 'text-amber-700 bg-amber-100'}
            `}>
                <p className="whitespace-nowrap text-xs">
                    {row.implementation_date ? page.stateColumn.complete : page.stateColumn.pending}
                </p>
            </span>
        </td>
{/*           <td className="whitespace-nowrap px-2 py-2 text-gray-700 w-1/4">{String(new Date(row.request_date *1000).toLocaleDateString())}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 w-1/4">{row.implementation_date ? String(new Date(row.implementation_date *1000).toLocaleDateString()) : 'Pendiente'}</td> */}
      </tr>
  )
}
