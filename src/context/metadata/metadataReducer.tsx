import { Metadata } from "./metadataContext";

export enum DATA {
    GET_ALL ='get_all'
}

export const initialState:Metadata = {
    agentes:[],
    paises:[],
    segmentos:[],
    tipos:[],
    via:[],
}

export const dataReducer = (state: Metadata, action: { type: string; payload: Metadata}) =>{
    switch (action.type) {
        case DATA.GET_ALL:
            return state = action.payload
        default:
            return state
    }
}