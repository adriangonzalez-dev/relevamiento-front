import { useEffect, useState } from "react"
import { apiData } from "../config/axios_fetch"

interface Agente {
    id: number;
    name: string;
    email: string;
    active: boolean;
    role: number;
    createdAt: Date;
    updatedAt: Date;
  }

interface Country {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

interface Segment {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

interface Via {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
interface Type {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  

export interface DataSheet {
        id: number;
        agent: Agente;
        request: string;
        type: Type;
        country: Country | null;
        request_date: number;
        implementation_date: number;
        segment?: Segment | null;
        via: Via;
}


export const useSheets = () => {
    const [data, setData] = useState<Array<DataSheet>>()
    const [isLoading, setLoading] = useState<boolean>(true)

    const getData = async():Promise<void> => {
        try {
            const {data:response} = await apiData.get<Promise<Array<DataSheet>>>('/api/data')
            setData((await response))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    },[])

  return {
    data,
    isLoading
  }
}
