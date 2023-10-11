import { useEffect, useState } from "react"
import { getDatAudits, getDataLvl1, Audits, Tickets_lvl1, ParamsData, getParamsData } from "../services/googleSheetsData"
import { ChartAudits } from "../components/audits/ChartAudits"
import { BartChart } from "../components/audits/BartChart"

export interface DataInterface {
    audits: Audits[],
    tickets: Tickets_lvl1[],
    params: ParamsData | undefined
}

export const AuditsComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<DataInterface>({
        audits:[],
        tickets:[],
        params: {
            totalPaisTickets: [],
            totalDescriptionTickets: [],
            totalResolutionTickets: [],
            totalPaisAudits: [],
            resolutionAudits: [],
            categoryTicketAudits: [],
            type_resolutionAudits: []
        }
    })

    const getData = async () => {
        try {
            const audits = await getDatAudits()
            const tickets = await getDataLvl1()
            const params = await getParamsData()
            setData({audits, tickets, params})
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    },[])
    if (isLoading) return <div>cargando...</div>

  return (
    <section className="p-4 flex flex-col w-full">
        <article className="flex flex-col mx-auto w-full gap-2">
            <h1 className="text-xl font-bold text-center">Mesa Nivel 1</h1>
            <div className="flex gap-2 w-full">
                <ChartAudits 
                typeGraphic="pie" 
                data={data.params?.totalDescriptionTickets}
                title="Cantidad de tickets por descripción"
                subtitle="Total tickets"/>
                <ChartAudits 
                typeGraphic="donut" 
                data={data.params?.resolutionAudits}
                title="Tickets auditados"
                subtitle="Total"/>
            </div>
            <BartChart data={data.params?.totalPaisTickets}/>
        </article>
        <div>
        {/* {
            data.tickets.map(audit => (
                <div key={audit.ticket_number}>{audit.ticket_name}</div>
                ))
        } */}
        </div>
        
    </section>
  )
}
