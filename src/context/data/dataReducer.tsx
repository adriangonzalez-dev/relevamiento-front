import { DataSheet } from "./dataContext";

export enum DATA {
    GET_ALL ='get_all'
}

export const initialState:Array<DataSheet> = []

export const dataReducer = (state: Array<DataSheet>, action: { type: string; payload: Array<DataSheet>}) =>{
    switch (action.type) {
        case DATA.GET_ALL:
            return state = action.payload
        default:
            return state
    }
}