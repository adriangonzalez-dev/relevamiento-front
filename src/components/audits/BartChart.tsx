import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import { TotalPais } from "../../services/googleSheetsData";

interface Props {
    data: Array<TotalPais> | undefined;
}


export const BartChart = ({data}:Props) => {
    console.log(data);
    return (
        <Card className="w-full">
            <Title className="mb-4 text-center">Tickets Nivel 1 por País</Title>
            <Subtitle className="mb-4 text-center">
            Cantidad de tickets dividos por país.
            </Subtitle>
            <BarChart
            className="mt-6 w-2/3 mx-auto"
            data={data ? data : []}
            index="pais"
            categories={['cantidad']}
            colors={["blue","amber","zinc","sky","neutral","cyan","fuchsia"]}
            />
            
        </Card>
    )
};