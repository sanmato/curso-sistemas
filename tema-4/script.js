let tabla = [
    {
        lacteo: 'Leche',
        porcion: '200cc',
        contenido_calcio: 280
    },
    {
        lacteo: 'Yogurt Bebible',
        porcion: '200cc',
        contenido_calcio: 180
    },
    {
        lacteo: 'Yogurt Firme',
        porcion: '190g',
        contenido_calcio: 203
    },
    {
        lacteo: 'Postre',
        porcion: '125g',
        contenido_calcio: 143
    },
    {
        lacteo: 'Queso Rallado',
        porcion: '8g',
        contenido_calcio: 104
    }
]


let identificarLacteoDeMayorContenidoDeCalcio = (tabla_de_datos) => {
    let nombre_del_lacteo = null;

    /*let mayor = tabla_de_datos[0].contenido_calcio;
    let componente = tabla_de_datos[0];
    
    for (elemento of tabla_de_datos) {
       if(elemento.contenido_calcio > mayor) {
           mayor = elemento.contenido_calcio;
           componente = elemento;
       } 
    }*/

    tabla_de_datos.sort ((c1, c2) => (c1.contenido_calcio < c2.contenido_calcio) ? 1 : 
        (c1.contenido_calcio > c2.contenido_calcio) ? -1 : 0);

    // Este otro metodo ordena la lista mediante la comparacion de valor de una de las propiedades

    return tabla_de_datos[0].lacteo;
}

console.log(identificarLacteoDeMayorContenidoDeCalcio(tabla));