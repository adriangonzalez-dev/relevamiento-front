import { DataSheet } from "../hooks/useSheets"

interface Props {
    row:DataSheet
}

export const RowResult = ({row}:Props) => {
  return (
      <tr className={` text-xs ${row.implementation_date ? 'bg-green-100' : 'odd:bg-gray-50'}`}>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700">
              {row.request}
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700">{row.segment ? row.segment.name : 'Sin segmento'}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700">{row.country ? row.country.name : 'Sin pais'}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700">{String(new Date(row.request_date *1000).toLocaleDateString())}</td>
          <td className="whitespace-nowrap px-2 py-2 text-gray-700">{row.implementation_date ? String(new Date(row.implementation_date *1000).toLocaleDateString()) : 'Pendiente'}</td>
      </tr>
  )
}
