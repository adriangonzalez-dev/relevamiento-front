import { useParams } from "react-router-dom";
import { useCountryData } from "../hooks/useCountryData";
import { useDictionary } from '../hooks/useDictionary';


export const PdfCover = () => {

  const {id} = useParams()

  const {getDate} = useDictionary({id: id ? +id : undefined})

  const {dataCountry} = useCountryData({id:id ? +id : undefined})

  
  return (
    <div className={`w-[210mm] h-[297mm] flex flex-col items-center mx-auto relative ${dataCountry?.pais} bg-contain`}>
      <span className="font-regular text-black absolute text-3xl left-[4rem] bottom-[7rem]">{getDate()}</span>
    </div>
  )
}
