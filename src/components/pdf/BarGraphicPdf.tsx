import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";
import {arcos, gmail, invgate, wsp} from '../../assets/icons'
import { useEffect, useState } from "react";
import { DataSheet } from "../../context/data/dataContext";
import { useMetadata } from "../../hooks/useMetadata";

interface Props {
    data: DataSheet[] | undefined
    className?: string
}

interface InitialValue {
    name: string,
    value: number,
    icon: () => JSX.Element
}

const initialValue:InitialValue[] = [
  {
    name: "Invgate Arcos",
    value: 0,
    icon: function ArcosIcon() {
      return (
        <img src={arcos} alt="" className="w-6 mr-2"/>
      );
    },
  },
  {
    name: "Invgate",
    value: 0,
    icon: function InvgateIcon() {
        return (
          <img src={invgate} alt="" className="w-6 mr-2"/>
        );
      },
  },
  {
    name: "Gmail",
    value: 0,
    icon: function GmailIcon() {
        return (
          <img src={gmail} alt="" className="w-6 mr-2"/>
        );
      },
  },
  {
    name: "Whatsapp",
    value: 0,
    icon: function WspIcon() {
        return (
          <img src={wsp} alt="" className="w-6 mr-2"/>
        );
      },
  },
];

export const BarGraphicPdf = ({data, className}:Props) => {
    const [newData, setNewData] = useState<InitialValue[]>(initialValue)
    const {via, isLoading} = useMetadata()
    useEffect(() => {

        const getData = () => {
            if (data) {

                setNewData([
                    {
                        name: "Invgate Arcos",
                        value: data.filter(item => +item.via.id === 4).length,
                        icon: function ArcosIcon() {
                            return (
                            <img src={arcos} alt="" className="w-6 mr-2"/>
                          );
                        }
                    },
                    {
                        name: "Invgate",
                        value: data.filter(item => +item.via.id === 1).length,
                        icon: function InvgateIcon() {
                            return (
                              <img src={invgate} alt="" className="w-6 mr-2"/>
                            );
                        }
                    },
                    {
                        name: "Whatsapp",
                        value: data.filter(item => +item.via.id === 3).length,
                        icon: function InvgateIcon() {
                            return (
                              <img src={wsp} alt="" className="w-6 mr-2"/>
                            );
                        }
                    },
                    {
                        name: "Gmail",
                        value: data.filter(item => +item.via.id === 2).length,
                        icon: function InvgateIcon() {
                            return (
                              <img src={gmail} alt="" className="w-6 mr-2"/>
                            );
                        }
                    }
                ])
              }
        }
        getData()
    },[data, via, isLoading])
    return(
      <Card className={`${className ? className : 'max-w-lg h-72 lg:h-full'}`}>
            <Title>Total por via de solicitud</Title>
            <Flex className="mt-4">
              <Text>
                  <Bold>Via de solicitud</Bold>
              </Text>
              <Text>
                  <Bold>Tickets</Bold>
              </Text>
              </Flex>
            <BarList 
            showAnimation={false}
            data={newData} 
            className="mt-4" />
        </Card>
    )
};