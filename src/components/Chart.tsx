import { Card, Title, DonutChart, Legend } from "@tremor/react";
import { useData } from "../hooks/useData";
import { useEffect, useState } from "react";

export const Chart = () => {
  
  const [agentTicketCounts, setAgentTicketCounts] = useState<{ agent: string; count: number }[]>([]);
  const {isLoading, data} = useData()


  useEffect(() => {
    if (!isLoading && data) {
    // Utiliza un objeto para realizar el seguimiento de los conteos por agente
    const counts: { [key: string]: number } = {};

    // Itera sobre los DataSheet y realiza el seguimiento de los conteos por agente
    data.forEach((dataSheet) => {
      const agent = dataSheet.agent;

      if (agent) {
        const agentId = agent.id.toString(); // Convierte el ID a cadena
        if (counts[agentId]) {
          counts[agentId]++;
        } else {
          counts[agentId] = 1;
        }
      }
    });

    const agentCountsArray = Object.entries(counts).map(([agentId, count]) => ({
      agent: data.find((dataSheet) => dataSheet.agent?.id.toString() === agentId)?.agent?.name || 'Desconocido',
      count,
    }));

    setAgentTicketCounts(agentCountsArray);
  }
  }, [data, isLoading]);

  return (
    <Card className="max-w-lg">
            <Title>Total pedidos: {data?.length}</Title>
            <DonutChart
              variant="pie"
              className="mt-6"
              data={agentTicketCounts}
              category="count"
              index="agent"
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
            <Legend
              className="mt-3"
              categories={agentTicketCounts.map((agent) => agent.agent)}
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
    </Card>
  )
};