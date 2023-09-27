import { createContext } from "react";

interface Role {
  id: number;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Agente {
    id: number;
    name: string;
    email: string;
    active: boolean;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
  }

export interface Country {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

export interface Segment {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

export interface Via {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
export interface Type {
    id: number;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Metadata {
      agentes: Array<Agente>;
      via: Array<Via>;
      segmentos: Array<Segment>;
      paises: Array<Country>;
      tipos: Array<Type>;
  }

export interface MetadataContextProps extends Metadata{
    isLoading: boolean
}

const initialState:MetadataContextProps = {
    agentes: [],
    via: [],
    segmentos: [],
    paises: [],
    tipos: [],
    isLoading: false
}

const MetadataContext = createContext<MetadataContextProps>(initialState);

export default MetadataContext;