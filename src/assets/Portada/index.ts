
import footerMx from './footer-mx.png';
import footerBr from './footer-br.png';
import footerAr from './footer-ar.png';
import footerUy from './footer-uy.png';
import footerPa from './footer-pa.png';
/* import footerPr from './footer-pr.png'; */
import banner from './banner.png'
import banner2 from './banner2.png'
import tecs from './tecs.png'

export interface PdfData {
    id: number,
    pais: string,
    footer: string
}

export const pdfData: PdfData[] = [
    {
        id: 30,
        pais: 'bg-ar',
        footer: footerAr,
    },
    {
        id: 47,
        pais: 'bg-br',
        footer: footerBr,
    },
    {
        id: 53,
        pais: 'bg-mx',
        footer: footerMx,
    },
    {
        id: 57,
        pais: 'bg-pa',
        footer: footerPa,
    },
    {
        id: 59,
        pais: 'bg-uy',
        footer: footerUy,
    },
]

export {
    banner,
    banner2,
    tecs
}