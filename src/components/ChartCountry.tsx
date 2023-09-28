import { Card, Title, DonutChart, Legend } from "@tremor/react";
import { useEffect, useState } from "react";
import { DataSheet } from "../context/data/dataContext";

interface Props {
    data: DataSheet[] | undefined
}

export const ChartCountry = ({data}:Props) => {
  
  const [typesCounts, SetTypesCounts] = useState<{ types: string; count: number }[]>([]);

  useEffect(() => {
    if (data) {
    // Utiliza un objeto para realizar el seguimiento de los conteos por agente
    const counts: { [key: string]: number } = {};

    // Itera sobre los DataSheet y realiza el seguimiento de los conteos por agente
    data.forEach((dataSheet) => {
      const type = dataSheet.type;

      if (type) {
        const typeId = type.id.toString(); // Convierte el ID a cadena
        if (counts[typeId]) {
          counts[typeId]++;
        } else {
          counts[typeId] = 1;
        }
      }
    });

    const typeCountsArray = Object.entries(counts).map(([typeId, count]) => ({
      types: data.find((dataSheet) => dataSheet.type?.id.toString() === typeId)?.type.name || 'Desconocido',
      count,
    }));

    SetTypesCounts(typeCountsArray);
  }
  }, [data]);

  return (
    <Card className="max-w-lg">
            <Title>Total pedidos: {data?.length}</Title>
            <DonutChart
              variant="pie"
              className="mt-6"
              data={typesCounts}
              category="count"
              index="types"
              colors={["amber", "cyan", "rose", "slate", "violet", "indigo"]}
            />
            <Legend
              className="mt-3"
              categories={typesCounts.map((type) => type.types)}
              colors={["amber",  "cyan", "rose", "slate", "violet", "indigo"]}
            />
    </Card>
  )
};