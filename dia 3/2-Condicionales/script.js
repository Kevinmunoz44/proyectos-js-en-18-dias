const evaluarCompra = () => {
    let elementoRespuesta = document.getElementById('decision');

    let elementoPrecio = document.getElementById('textoPrecio').value;

    if(elementoPrecio < 5){
        elementoRespuesta.textContent = 'Comprar dos cartones de leche';
    }
}