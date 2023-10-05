const consultarPrecio = () => {
    let elementoRespuesta = document.getElementById('textoPrecio');

    let elementoFruta = document.getElementById('numeroFruta');
    let fruta = elementoFruta.value;

    switch (fruta) {
        case "1":
            elementoRespuesta.textContent = '$3.000'
            break;
        case "2":
            elementoRespuesta.textContent = '$5.000'
            break;
        case "3":
            elementoRespuesta.textContent = '$7.000'
            break;
        case "4":
            elementoRespuesta.textContent = '$2.000'
            break;
        case "5":
            elementoRespuesta.textContent = '$4.500'
            break;
        default:
            elementoRespuesta.textContent = 'Opcion no valida'
    }
}