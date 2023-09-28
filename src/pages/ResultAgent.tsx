import { useParams } from 'react-router-dom'

export const ResultAgent = () => {
    const {id} = useParams()
  return (
    <div>{id}</div>
  )
}
