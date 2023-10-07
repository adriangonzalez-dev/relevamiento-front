import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";
import {arcos, gmail, invgate, wsp} from '../assets/icons'
import { useData } from "../hooks/useData";
import { useEffect, useState } from "react";
import { useMetadata } from "../hooks/useMetadata";

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

export const BarGraphic = () => {
    const {data, isLoading} = useData()
    const {via} = useMetadata()
    const [newData, setNewData] = useState<InitialValue[]>(initialValue)
    useEffect(() => {
      const getId = (name:string) => {
        return via.find(item => item.name === name)?.id
      }
        const getData = () => {
            if (!isLoading && data) {
                setNewData([
                    {
                        name: "Invgate Arcos",
                        value: data.filter(item => +item.via.id === getId('Invgate Arcos')).length,
                        icon: function ArcosIcon() {
                            return (
                            <img src={arcos} alt="" className="w-6 mr-2"/>
                          );
                        }
                    },
                    {
                        name: "Invgate",
                        value: data.filter(item => +item.via.id === getId('Invgate SIA')).length,
                        icon: function InvgateIcon() {
                            return (
                              <img src={invgate} alt="" className="w-6 mr-2"/>
                            );
                        }
                    },
                    {
                        name: "Whatsapp",
                        value: data.filter(item => +item.via.id === getId('Whatsapp')).length,
                        icon: function InvgateIcon() {
                            return (
                              <img src={wsp} alt="" className="w-6 mr-2"/>
                            );
                        }
                    },
                    {
                        name: "Gmail",
                        value: data.filter(item => +item.via.id === getId('Email')).length,
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
    },[isLoading, data, via])
    return(
      <Card className="max-w-lg h-72 lg:h-full">
            <Title>Total por via de solicitud</Title>
            <Flex className="mt-4">
            <Text>
                <Bold>Via de solicitud</Bold>
            </Text>
            <Text>
                <Bold>Tickets</Bold>
            </Text>
            </Flex>
            <BarList data={newData} className="mt-2" />
        </Card>
    )
};