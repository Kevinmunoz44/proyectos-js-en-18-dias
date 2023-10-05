const mostrarResultado = (resultado) => {
    document.getElementById('resultado').value = resultado;
};

const calcularSuma = () => {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;

    mostrarResultado(numero1 + numero2)
};

const calcularResta = () => {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;

    mostrarResultado(numero1 - numero2)
};

const calcularMultiplicacion = () => {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;

    mostrarResultado(numero1 * numero2)
};

const calcularDivision = () => {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;

    mostrarResultado(numero1 / numero2)
};

const calcularRaiz = () => {
    let numero = +document.getElementById('numero1').value;

    mostrarResultado(Math.sqrt(numero))
};

const calcularPotencia = () => {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;

    mostrarResultado(Math.pow(numero1, numero2))
};

const calcularAbs = (numero1) => {
    let numero = +document.getElementById('numero1').value;

    mostrarResultado(Math.abs(numero))
};

const calcularAleatorio = () => {
    let minimo = +document.getElementById('numero1').value;
    let maximo = +document.getElementById('numero2').value;
    maximo = maximo + 1;
    mostrarResultado (Math.floor(Math.random() * (minimo, maximo) + minimo))
};

const calcularRound = (numero1, numero2) => { 
    let resultado = +document.getElementById('resultado').value;

    mostrarResultado(Math.round(resultado))
};

const calcularFloor = (numero1, numero2) => {
    let resultado = +document.getElementById('resultado').value;

    mostrarResultado(Math.floor(resultado))
 };

const calcularCeil = (numero1, numero2) => { 
    let resultado = +document.getElementById('resultado').value;

    mostrarResultado(Math.ceil(resultado))
};
