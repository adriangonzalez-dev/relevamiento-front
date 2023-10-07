import { useParams } from "react-router-dom";
import { useCountryData } from "../../hooks/useCountryData";
import { useDictionary } from '../../hooks/useDictionary';


export const PdfCover = () => {

  const {id} = useParams()

  const {getDate, page} = useDictionary({id: id ? +id : undefined})

  const {dataCountry} = useCountryData({id:id ? +id : undefined})

  
  return (
    <header className={`flex justify-between p-2 w-full h-[22mm] bg-gradient-to-b ${dataCountry?.gradient}`}>
            <div className="w-1/2 h-full flex items-start flex-col justify-center">
              <h1 className="text-2xl font-bold">{page.header}</h1>
              <h2 className="text-lg font-regular">{getDate()}</h2>
            </div>
            <div className="w-1/2 h-full flex items-end flex-col justify-center">
              <img src={dataCountry?.flag} alt="flag" className="w-[80px]"/>
            </div>
    </header>
  )
}
