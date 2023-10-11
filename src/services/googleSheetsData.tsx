
import { apiData } from "../config/axios_fetch"

export interface Tickets_lvl1 {
    timestamp: Date;
    user: string;
    invgate: string;
    country: string;
    ticket_number: number;
    ticket_name: string;
    description: string;
    local: string;
    type: string;
    segment: string;
    resolution: string;
  }
  
export interface Audits {
    auditor: string;
    title: string;
    timestamp: Date;
    type: string;
    country: string;
    resolution_lvl1: string;
    category_ticket: string;
    origin: string;
    resolution: string;
    segment: string;
    via: string;
    ticket_number: number;
    comments: string;
  }

export interface ParamsData {
    totalPaisTickets:        TotalPais[];
    totalDescriptionTickets: ResolutionAudit[];
    totalResolutionTickets:  TotalResolutionTicket[];
    totalPaisAudits:         TotalPais[];
    resolutionAudits:        ResolutionAudit[];
    categoryTicketAudits:    CategoryTicketAudit[];
    type_resolutionAudits:   TypeResolutionAudit[];
}

export interface CategoryTicketAudit {
    category: string;
    cantidad: number;
}

export interface ResolutionAudit {
    descr:    string;
    cantidad: number;
}

export interface TotalPais {
    pais:     string;
    cantidad: number;
}

export interface TotalResolutionTicket {
    resolution: string;
    cantidad:   number;
}

export interface TypeResolutionAudit {
    res:      string;
    cantidad: number;
}


export const getDataLvl1 = async():Promise<Array<Tickets_lvl1>> => {
    try {
        const {data} = await apiData.get<Promise<Array<Tickets_lvl1>>>('/api/googleapis/tickets')
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getDatAudits = async():Promise<Array<Audits>> => {
    try {
        const {data} = await apiData.get<Promise<Array<Audits>>>('/api/googleapis/audits')
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}


export const getParamsData = async():Promise<ParamsData | undefined> => {
    try {
        const {data} = await apiData.get<Promise<ParamsData>>('/api/googleapis/params')
        if(data) return data
        return undefined
    } catch (error) {
        console.log(error)
    }
}