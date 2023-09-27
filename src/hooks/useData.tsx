import { useContext } from 'react'
import DataContext from '../context/data/dataContext'

export const useData = () => {
    const {data, isLoading} = useContext(DataContext)
  return {data, isLoading}
}
