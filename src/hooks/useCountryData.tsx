import { useEffect, useState } from 'react'
import { pdfData } from '../assets/Portada';

interface Props {
    id: number | undefined
}

export const useCountryData = ({id}:Props) => {
    const [dataCountry, setDataCountry] = useState<{id:number, gradient:string, flag: string}>()

    useEffect(()=>{
        const getInfoData = () => {
          if(!id) return;
          const infoData = pdfData?.find((item) => item.id === +id);
          if(!infoData) return;
          setDataCountry(infoData)
        }
        getInfoData()
      },[id])

  return {
    dataCountry
  }
}
