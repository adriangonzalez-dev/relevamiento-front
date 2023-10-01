import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

export const usePDF = () => {
    
    const componentRef = useRef<HTMLDivElement | null>(null);
    
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  return {
    componentRef,
    handlePrint
  }
}
