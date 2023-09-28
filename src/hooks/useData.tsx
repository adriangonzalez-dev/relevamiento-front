import { useContext } from 'react'
import DataContext from '../context/data/dataContext'

export const useData = () => {
  return  useContext(DataContext)
}
