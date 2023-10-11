import { Card, Title, DonutChart, Subtitle, Legend } from "@tremor/react";

interface DataResponse {
  descr: string;
  cantidad: number;
}

interface Props {
    typeGraphic: 'pie' | 'donut',
    data: Array<DataResponse> | undefined,
    title: string
    subtitle: string
}

export const ChartAudits = ({typeGraphic, data, title, subtitle}:Props) => {

    return (
        <Card className="w-1/2">
            <Title>{title}</Title>
            <Subtitle className="mb-4 text-center">
            {subtitle}: {data?.length}
            </Subtitle>
            <DonutChart
            className="mt-6"
            variant={typeGraphic}
            data={data ? data : []}
            category="cantidad"
            index="descr"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber","green","emerald","gray","lime","zinc"]}
            />
            <Legend
                className="mt-3"
                categories={data ? data?.map((d) => d.descr): []}
                colors={["blue","amber","zinc","sky","neutral","cyan","fuchsia"]}
                />
        </Card>
    )
};