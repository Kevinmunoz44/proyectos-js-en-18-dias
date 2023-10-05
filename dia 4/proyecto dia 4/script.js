const calificaciones = [4, 7, 5, 8, 9];

const listarNotas = () => {
    let lista = document.getElementById('ListaNotas');

    for(let nota of calificaciones){
        let item = document.createElement('li');
        item.innerText = nota;
        lista.appendChild(item);
    }
};

const calcularPromedio = () => {
    let suma = 0;

    for(i = 0; i < 5; i++){
        suma += calificaciones[i];
    }
    let promedio = (suma / 5);
    document.getElementById('promedio').textContent = promedio
};

const notaMasAlta = () => {
    let notaAlta = 0;
    let i = 0;

    while(i < 5){
        if(calificaciones[i] > notaAlta){
            notaAlta = calificaciones[i];
        }
        i++;
    }
    document.getElementById('nota').textContent = notaAlta;
};

const hayAplazo = () => {
    let aplazo = 'No';
    let i = 0;

    do{
        if(calificaciones[i] < 4){
            aplazo = "Si";
            break;
        }
        i++;
    }while(i < 5);
    document.getElementById('aplazo');
};