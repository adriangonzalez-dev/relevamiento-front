import { useEffect, useState } from "react"
import { DataSheet } from "../context/data/dataContext"

interface Props {
    data: DataSheet[] | undefined
}

export const Stats = ({data}:Props) => {
    const [pending, setPending] = useState<DataSheet[]>()
    const date = new Date()
    useEffect(()=>{
        if(data){
            setPending(data?.filter(d=>d.implementation_date===null))
        }
    },[data])


  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow mx-auto">
  
        <div className="stat">
            <div className="stat-title">Total</div>
            <div className="stat-value text-gray-700">{data?.length} tk</div>
            <div className="stat-desc">{date.toLocaleDateString()}</div>
        </div>
        
        <div className="stat">
            <div className="stat-title">Pendientes</div>
            <div className="stat-value text-gray-700">{pending?.length} tk</div>
            <div className="stat-desc">({(data && pending) && Math.round(Number(pending?.length) / data?.length * 100)}%)</div>
        </div>
        
        <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value text-gray-700">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
    </div>
  )
}
