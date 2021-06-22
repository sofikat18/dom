//Se definen todas las variables que jalaran los datos del html a js:

let btnFarenheit = document.getElementById('farenheit');
let btnKelvin = document.getElementById('kelvin');
let temperatura = document.getElementById('temperatura');
let resultado = document.getElementById('resultado');

//Se activa el event Listener a la variable del botón:

btnFarenheit.addEventListener('click', event => {
    /*se declara la variable que va a ser el resultado de la operacion. Se coloca parseInt para
    que convierta a números la información ingresada a través del input.
    */
let far= parseInt(temperatura.value * 9/5) + 32;
/*La variable resultado es el nombre del div en el que se insertará en el Html
el resultado de la operación de arriba. TextContent nos permite insertar texto.
Los backticks o `` nos permiten insertar un string o texto si tener que agregar
el símbolo de + o insertar strings vacíos. Directamente en el string y a través
del ${} podemos insertar la variable con el resultado.
*/
resultado.textContent = `El resultado en Fahrenheit es: ${far}ºF`;
})
// Es lo mismo de arriba, pero cambian el nombre de la variable y la operación.
btnKelvin.addEventListener('click', event => {
    let kel= parseInt(temperatura.value) + 273;
    resultado.textContent = `El resultado en Kelvin es: ${kel}ºK`;
    })


