import { DataProvider } from "./data/dataProvider"
import { MetadataProvider } from "./metadata/metadataProvider"

interface Props {
    children: React.ReactNode
}

export const GlobalProvider = ({children}:Props) => {
  return (
    <DataProvider>
        <MetadataProvider>
            {children}
        </MetadataProvider>
    </DataProvider>
  )
}
