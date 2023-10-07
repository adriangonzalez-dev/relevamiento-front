
import mx from './flags/mexico.png';
import br from './flags/brasil.png';
import ar from './flags/argentina.png';
import uy from './flags/uruguay.png';
import pa from './flags/panama.png';
import pr from './flags/puerto-rico.png';
import banner from './banner.png'
import banner2 from './banner2.png'
import tecs from './tecs.png'

export interface PdfData {
    id: number,
    gradient: string,
    flag: string
}

export const pdfData: PdfData[] = [
    {
        id: 30,
        gradient: 'from-blue-200 to-white',
        flag: ar,
    },
    {
        id: 47,
        gradient: 'from-yellow-100 to-white',
        flag: br,
    },
    {
        id: 53,
        gradient: 'bg-gradient-to-r from-green-200 via-white to-red-200',
        flag: mx,
    },
    {
        id: 57,
        gradient: 'bg-gradient-to-bl from-red-200 via-white to-blue-200',
        flag: pa,
    },
    {
        id: 59,
        gradient: 'bg-gradient-to-b from-blue-300 to-white',
        flag: uy,
    },
    {
        id: 589,
        gradient: 'from-pr-1 to-pr-2',
        flag: pr,
    }
]

export {
    banner,
    banner2,
    tecs
}