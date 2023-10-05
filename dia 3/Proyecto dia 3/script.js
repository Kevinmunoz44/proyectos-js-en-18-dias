const recomendar = (genero) => {
    let elementoEdad = document.getElementById('edad');
    let recomendacion = document.getElementById('recomendacion')

    let edad = elementoEdad.value;
    switch (genero) {
        case 'infantil':
            if (edad < 13) {
                recomendacion.textContent = 'Los minions';
            } else {
                if (edad < 16) {
                    recomendacion.textContent = 'Chiken little';
                } else {
                    recomendacion.textContent = 'La fiesta de salchichas'
                }
            };
            break;
        
        case 'comedia':
            if (edad < 13) {
                recomendacion.textContent = 'free guy';
            } else {
                if (edad < 16) {
                    recomendacion.textContent = 'El menu';
                } else {
                    recomendacion.textContent = 'Scary movie'
                }
            };
            break;

        case 'terror':
            if (edad < 13) {
                recomendacion.textContent = 'shark';
            } else {
                if (edad < 16) {
                    recomendacion.textContent = 'La monja';
                } else {
                    recomendacion.textContent = 'Saw'
                }
            };
            break;

        case 'accion':
            if (edad < 13) {
                recomendacion.textContent = 'rapidos y furiosos';
            } else {
                if (edad < 16) {
                    recomendacion.textContent = 'kick ass';
                } else {
                    recomendacion.textContent = 'Rambo'
                }
            };
            break;

    }
}