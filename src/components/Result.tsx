import { useData } from "../hooks/useData";
import { RowResult } from "./RowResult";

export const Result = () => {
  const {data} = useData()
  return (
    <div className="overflow-x-auto w-5/6 mx-auto">
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
             data?.map(item=><RowResult row={item} key={item.id}/>)
          }
        </tbody>
      </table>
    </div>
  )
}
