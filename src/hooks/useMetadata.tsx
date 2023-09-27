import {useContext} from 'react'
import MetadataContext from '../context/metadata/metadataContext'

export const useMetadata = () => {
  const response = useContext(MetadataContext)
  return {...response}
}
