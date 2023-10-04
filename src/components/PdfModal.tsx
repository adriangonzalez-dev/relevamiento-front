
import { DataSheet } from "../context/data/dataContext"
import { usePDF } from "../hooks/usePDF";
import { PdfPage } from "./PdfPage";
import { PdfCover } from "./PdfCover";
import { useImagePreview } from "../hooks/useImagePreview";

interface Props {
  data: DataSheet[] | undefined,
  setModal: () => void
}

export const PdfModal = ({ data, setModal }: Props) => {

  const { handlePrint, componentRef } = usePDF();
  const {imagePreviews,handleFileInputChange} = useImagePreview()

  return (
    <div className="flex flex-col fixed top-0 w-screen h-screen backdrop-blur flex items-center justify-center">
      <div className="bg-white w-3/5 h-3/4 overflow-scroll relative">
      <button onClick={() => setModal()} className="fixed top-5 right-5 text-xg font-bold btn btn-error"><span>X</span></button>
        <div className="w-[210mm] h-[594mm] mx-auto" ref={componentRef}>
          <PdfCover/>
          <PdfPage data={data} images={imagePreviews ? imagePreviews : undefined}/>
        </div>
      </div>
      <div className="flex justify-center gap-4 w-full">
        <input 
        type="file" 
        multiple
        onChange={handleFileInputChange}
        className="file-input file-input-bordered file-input-error w-full max-w-xs" />
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
