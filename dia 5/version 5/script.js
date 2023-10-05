const crearTiendas = (contenedorId, min, cantidadTiendas) => {
    //Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorId);

    //Loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        //crear el texto de label para poder lllamr a la función
        let textoEtiqueta = 'Tienda ' + conteoTiendas;

        //crear tiendas con el creaParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //Agregar el parrafo sl contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

const crearParrafoTienda = (textoLabel, valorMin) => {
    //crear las etiquetas de parrafo
    let elementoParrafo = document.createElement('p');

    //Crear la etiqueta label
    let elementoLabel = document.createElement('label');
    elementoLabel.innerText = textoLabel + ': '

    //Conectar con el input
    elementoLabel.setAttribute('for', textoLabel);

    //Crear el input
    let elementoInput = document.createElement('input');

    //Establecer atributos del input
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('id', textoLabel);
    elementoInput.setAttribute('min', valorMin);
    elementoInput.setAttribute('value', 0);

    //Agregar laber input al parrafo
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el parrafo completo
    return elementoParrafo;
};

const extraerNumeroDesdeElemento = (elemento) => {
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

const calcular = () => {
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById('itemsTiendas');

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }


    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutro";

        if(valorVenta == ventaMayor){
            item.children[1].className = "menuInputMayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "menuInputMenor";
        }
    }

    let mensajeSalida = 'Total ventas: ' + totalVentas +
                        '/ Venta Mayor: ' + ventaMayor +
                        '/ Venta Menor: ' + ventaMenor;

    let elementoSalida = document.getElementById('parrafoSalida');

    elementoSalida.textContent = mensajeSalida;
    
};

const sumarTotal = (array) => {
    let total = 0;

    for(let venta of array) {
        total = total + venta;
    }

    return total;
};

const calcularMayor = (array) => {
    let maximo = array[0];

    for(let venta of array) {
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

const calcularMenor = (array) => {
    let minimo = array[0];

    for(let venta of array) {
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}
