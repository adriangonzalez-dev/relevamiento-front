

export const PdfCover = () => {
  const getDate =()=> {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const fecha = new Date();
    const mesActual = meses[fecha.getMonth()];
    const anioActual = fecha.getFullYear();
    
    return `${mesActual} ${anioActual}`;
  }
  return (
    <div className="w-[210mm] h-[297mm] flex flex-col items-center mx-auto relative bg-portada-arg bg-contain">
      <span className="font-regular text-black absolute text-3xl left-[4rem] bottom-[7rem]">{getDate()}</span>
    </div>
  )
}
