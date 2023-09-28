
import { CreateDataDto } from "../components/Modal"
import { apiData } from "../config/axios_fetch"
import { DataSheet } from "../context/data/dataContext"

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
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}