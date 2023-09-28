import { createContext } from "react";

interface Agente {
    id: number;
    name: string;
    email: string;
    active: boolean;
    role: number;
    createdAt: Date;
    updatedAt: Date;
  }

interface Country {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

interface Segment {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

interface Via {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
interface Type {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  

export interface DataSheet {
        id: number;
        agent: Agente;
        request: string;
        type: Type;
        country: Country | null;
        request_date: number;
        implementation_date: number;
        segment?: Segment | null;
        via: Via;
}

interface DataContextProps {
    data: Array<DataSheet>
    isLoading: boolean
    updatedData: (data:Array<DataSheet>) => void
}

const initialState:DataContextProps = {
    data: [],
    isLoading: false,
    updatedData: () => {}
}

const DataContext = createContext<DataContextProps>(initialState);

export default DataContext;