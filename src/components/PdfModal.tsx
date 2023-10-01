
import { DataSheet } from "../context/data/dataContext"
import { usePDF } from "../hooks/usePDF";
import { BarGraphicCountry } from "./BarGraphicCountry";
import { ChartCountry } from "./ChartCountry";
import { RowResult } from "./RowResult";


interface Props {
  data: DataSheet[] | undefined,
  setModal: () => void
}

export const PdfModal = ({ data, setModal }: Props) => {

  const { handlePrint, componentRef } = usePDF()

  return (
    <div className="flex flex-col fixed top-0 w-screen h-screen backdrop-blur flex items-center justify-center">
      <div className="bg-white w-3/5 h-3/4 overflow-scroll">
        <div className="w-[210mm] h-[297mm] mx-auto py-4 px-2 border screenshot" ref={componentRef}>
          <div className="flex flex-col justify-center gap-2">
            <ChartCountry data={data} className={`w-full p-2`} />
            <BarGraphicCountry data={data} className={`w-full p-2`} />
          </div>
          <div className="overflow-x-auto w-full mx-auto mt-4">
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
                  data?.map(item => <RowResult row={item} key={item.id} />)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <button

          className={'btn rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring'}
          onClick={() => setModal()}>
          Cerrar!
        </button>
        <button
          className={'btn rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring'}
          onClick={handlePrint}
        >
          Descargar!
        </button>
      </div>
    </div>
  )
}
