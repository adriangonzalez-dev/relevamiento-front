import { DataSheet } from "../hooks/useSheets"

interface Props {
    row:DataSheet
}

export const RowResultCountry = ({row}:Props) => {
  return (
      <tr className={` text-xs w-[291] ${row.implementation_date ? 'bg-green-100' : 'odd:bg-gray-50'}`}>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 overflow-hidden text-overflow-ellipsis w-1/4">
              {row.request}
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 w-1/4">{row.type ? row.type.name : 'Sin categoría'}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 w-1/4">{String(new Date(row.request_date *1000).toLocaleDateString())}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700 w-1/4">{row.implementation_date ? String(new Date(row.implementation_date *1000).toLocaleDateString()) : 'Pendiente'}</td>
      </tr>
  )
}
