import { useEffect, useReducer, useState } from 'react';
import MetadataContext from './metadataContext';
import { initialState, dataReducer } from './metadataReducer';
import { getMetadata } from '../../services/metadataServices';
import { DATA } from '../data/dataReducer'

interface Props {
    children: React.ReactNode;
}

export const MetadataProvider = ({children}:Props) =>{
    const [data, dataDispatch] = useReducer(dataReducer, initialState);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const retrieveMetadata = async () =>{
        try {
            const response = await getMetadata();
            dataDispatch({type: DATA.GET_ALL , payload: response})
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() =>{
        retrieveMetadata();
    }, []);

    return(
        <MetadataContext.Provider value={{...data, isLoading}}>
            {children}
        </MetadataContext.Provider>
    )
}