/*variable para acc al carousel*/
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//?------------------event listener para la flecha derecha derecha---------
flechaDerecha.addEventListener('click', () => {    /*scroll de la derecha = al que ya tenemos y le sumes ancho de fila*/
    fila.scrollLeft += fila.offsetWidth;
   
    /*accedo al indicador activo y lo guardo en la variable para utilizarla, si el indicador activo a la derecha tiene un elemento, quito el indicador activo al anterior y lo dejo en el actual*/
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//?--------------event listener para la flecha derecha izquierda---------
flechaIzquierda.addEventListener('click', () => {    /*scroll de la izquierda = al que ya tenemos y le sumes ancho de fila cambia el +*/
    fila.scrollLeft -= fila.offsetWidth;
    
    /*tengo que reemplazar el next por el previous*/
    const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//?------------paginación---------
const numeroPaginas = Math.ceil(peliculas.length / 5);
/*mostrar el nro de paginas con la cantidad de peliculas si da con deciml redondeo hacia arriba*/
for (let i = 0; i < numeroPaginas; i++){ /*ciclo for, constante i, el ciclo i se repita mientras sea menor al nro de pag, en cada iteración i aumente de uno en uno*/
    const indicador = document.createElement('button'); 
    /*por cada pagina creo un boton*/

    if (i === 0) {
        indicador.classList.add('activo'); /*condicional, que si i es = 0 le agrego la clase activo*/
    }
    document.querySelector('.indicadores').appendChild(indicador);
    /*por cada pagina creo un boton que lo coloco dentro 'appenChild' de indicadores*/

    indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;  /**el ancho por2*/
    
    document.querySelector('.indicadores .activo').classList.remove('activo');/*elimino el indicador que tiene la clase activo*/
    e.target.classList.add('activo'); /*señalo el indicador cliqueado*/

});
    
}

//?-------------hover----------------
/*por cada pelicula a la que le paso el cursor se resalta y vuelve*/
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover')); /*pag vuelve a su estado natural */
            elemento.classList.add('hover');
		}, 300); /*300 miliseg*/
    });
}); 

/*elimina el hover/efecto al sacar el cursor de cada pelicula*/

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
