import { apiData } from "../config/axios_fetch"
import { Agente, Country, Metadata, Segment, Type, Via } from "../context/metadata/metadataContext"

export const getMetadata = async():Promise<Metadata> => {
    try {
            const {data:agente} = await apiData.get<Promise<Array<Agente>>>('/api/agente')
            const {data:pais} = await apiData.get<Promise<Array<Country>>>('/api/pais')
            const {data:segment} = await apiData.get<Promise<Array<Segment>>>('/api/segmento')
            const {data:tipo} = await apiData.get<Promise<Array<Type>>>('/api/tipo')
            const {data:via} = await apiData.get<Promise<Array<Via>>>('/api/via-solicitud')

            return {
                agentes: await agente,
                paises: await pais,
                segmentos: await segment,
                tipos: await tipo,
                via: await via
            }

    } catch (error) {
        console.log(error)
        return {
            agentes: [],
            paises: [],
            segmentos: [],
            tipos: [],
            via: [],
        }
    }
}