import { useEffect, useState } from 'react'
import { apiData } from '../config/axios_fetch'

enum TypeVia {
    invgate_sia= 'Invgate SIA',
    whatsapp= 'WhatsApp',
    invgate_arcos= 'Invgate Arcos',
    email= 'Email',
  }
  
  interface ViaSolicitud {
    via:TypeVia,
    cantidad:number
  }

  interface TotalData {
    items:Array<string>,
    cants:Array<number>,
    total:number
  }

  interface ResponseData {
    data:Array<ViaSolicitud>,
    total:TotalData
  }
export const useViaTypes = () => {
    const [viaData, setViaData] = useState<ResponseData>()
    const [isLoadingVia, setLoadingVia] = useState<boolean>(true)
    
      const getVia = async () => {
        try {
            const response = await apiData.get('last-month/via');
            setViaData(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingVia(false)
        }
      }

      useEffect(()=>{
        getVia()
      },[])


  return {
    viaData,
    isLoadingVia
  }
}
