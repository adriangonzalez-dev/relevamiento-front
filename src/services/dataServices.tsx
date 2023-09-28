
import { CreateDataDto } from "../components/Modal"
import { apiData } from "../config/axios_fetch"
import { DataSheet } from "../context/data/dataContext"
import { toast } from 'sonner';

export const getData = async():Promise<Array<DataSheet>> => {
    try {
        const {data} = await apiData.get<Promise<Array<DataSheet>>>('/api/data')
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const createData = async(data:CreateDataDto):Promise<Array<DataSheet>> => {
    try {
        const response = await apiData.post('/api/data', data)
        if(response.status === 400){
            toast.error('Error al crear el registro')
            return []
        }
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}