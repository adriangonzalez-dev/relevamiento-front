import { useEffect, useReducer, useState } from 'react';
import DataContext, { DataSheet } from './dataContext';
import { initialState, dataReducer } from './dataReducer';
import { getData } from '../../services/dataServices';
import { DATA } from '../../context/data/dataReducer'

interface Props {
    children: React.ReactNode;
}

export const DataProvider = ({children}:Props) =>{
    const [data, dataDispatch] = useReducer(dataReducer, initialState);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const updatedData = async (response:Array<DataSheet>) => {
        try {
            dataDispatch({type: DATA.GET_ALL , payload: response})
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    const retrieveData = async () =>{
        try {
            const response = await getData();
            dataDispatch({type: DATA.GET_ALL , payload: response})
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() =>{
        retrieveData();
    }, []);

    return(
        <DataContext.Provider value={{data, isLoading, updatedData}}>
            {children}
        </DataContext.Provider>
    )
}