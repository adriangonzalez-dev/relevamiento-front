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