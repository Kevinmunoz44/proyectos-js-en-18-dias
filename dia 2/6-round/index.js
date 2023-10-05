const redondear = () => {
    //Existen 3 formas de redondear un numero en javascript
    //redondear
    //Hacia abajo
    primero = Math.round(14.40)
    console.log(primero);

    //Hacia Arriba
    segundo = Math.round(14.50)
    console.log(segundo);
}

const floorAbajo = () => {
    primero = Math.floor(14.9)
    console.log(primero);

    segundo = Math.floor(14.5)
    console.log(segundo);
}

const ceil = () => {
    primero = Math.ceil(45)
    console.log(primero);
}