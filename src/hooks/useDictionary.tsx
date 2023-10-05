interface Props {
    id:number | undefined
}

export const useDictionary = ({id}:Props) => {
    const idExists = (id && +id !== 47)
    const page = {
        title: idExists ? 'Solicitud de contenido' : 'Pedido de conteúdo',
        chartGraphTitle: idExists ? 'Total pedidos' : 'Total de pedidos',
        barGraphTitle: idExists ? 'Total por via de solicitud': 'Total por meio de solicitação',
        noDataContent: idExists ? 'No existen datos de contenido' : 'Não existem dados de conteúdo',
        subtitleOne: idExists ? 'Nuevas Sucursales': 'Novas Filiais',
        tableHeads: {
            request: idExists ? 'Pedido' : 'Pedido',
            segment: idExists ? 'Segmento' : 'Segmento',
            country: idExists ? 'País' : 'País',
            category: idExists ? 'Categoría' : 'Categoria',
            request_date: idExists ? 'Fecha de solicitud' : 'Data de solicitação',
            implementation_date: idExists ? 'Fecha de implementación' : 'Data de implementação',
        },
        subtitleTwo: idExists ? 'Cambios o nuevas pantallas' : 'Mudanças ou novas telas',
        totalMigrations: idExists ? 'Cantidad de nuevas sucursales' : 'Quantidade de novas filiais',
        modulacion: idExists ? 'Modulación' : 'Modulação',
    }
    const getDate =()=> {
        const meses_es = [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
    
        const meses_pt = [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
          "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        
        const fecha = new Date();
        let mesActual;
        if(id && +id === 47){
          mesActual = meses_pt[fecha.getMonth()];
        } else {
          mesActual = meses_es[fecha.getMonth()];
        }
        
        const anioActual = fecha.getFullYear();
        
        return `${mesActual} ${anioActual}`;
      }
  return {
    page,
    getDate
  }
}
