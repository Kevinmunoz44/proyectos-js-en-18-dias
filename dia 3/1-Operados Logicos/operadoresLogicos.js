const calcular = () => {
    let elementoRespuesta1 = document.getElementById('respuesta1');
    let elementoRespuesta2 = document.getElementById('respuesta2');
    let elementoRespuesta3 = document.getElementById('respuesta3');

    let elementoEdad = document.getElementById('textoEdad').value;

    let puedeBeber = elementoEdad >= 18;
    elementoRespuesta1.textContent = puedeBeber;

    let puedeIngresar = elementoEdad >= 18 && elementoEdad <= 30
    elementoRespuesta2.textContent = puedeIngresar;

    let entradaGratis = elementoEdad == 20 || elementoEdad == 25
    elementoRespuesta3.textContent = entradaGratis
}