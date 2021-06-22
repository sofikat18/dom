/* Se definen los arreglos
*/
const animales = ['Perro', 'Gato', 'Ratón', 'Delfín', 'Morsa', 'Reno', 'Mapache', 'León', 'Tigre', 'Tlacuache'];
const computadoras = ['Dell', 'Lenovo', 'Apple', 'Asus', 'Compaq', 'HP', 'Intel'];
const personas = ['Humberto', 'Ana', 'Alex', 'Sharon', 'Berna'];

//No olvidar "llamar" la lista a través del DOM

const list = document.querySelector('#lista')

// También hay que "llamar" a los botones a través del DOM, con su ID respectivo
let btnAnimales = document.querySelector('#animales');
let btnComputadoras = document.querySelector('#computadoras');
let btnPersonas = document.querySelector('#personas');

/* Ahora hay que agregar el evento que queremos que suceda cuando el usuario
de "click" en el botón. Se define el evento (click) y a continuación se 
declara la función "event" (recordar que el símbolo de => es el equivalente a
  declarar "function")
*/

btnAnimales.addEventListener('click', event => {
  /* Aquí adentro, vamos a poner la acción que ocurrirá al dar click.
  Vamos a llamar al arreglo "animales" y vamos a decir "Por cada uno de los (elementos)"
  es decir: forEach(animal), hay que hacer lo siguiente.... 
  */
  animales.forEach(function (animal){
    /* creamos la variable "item" y le vamos a decir que va a crear un elemento
    en el HTML a través del DOM. Este elemento será un elemento de lista, es
    decir un "li"
    */
    let item = document.createElement('li');
    /* Ahora le vamos a decir: a ese elemento que creaste, le vas a meter
    contenido, en este caso texto ("textContent"). Ese texto va a ser cada uno
    de los elementos del arreglo "animales" (cada elemento lo identificamos
      como "animal", en este caso)
    */
    item.textContent = `${animal}`;
    /* Y por último, le vamos a decir "ok list, agrega el elemento que creamos
    a nuestro elemento "lista"". Al elemento de lista lo llamamos del DOM aquí 
    mismo, al principio, y lo guardamos en la variable "list". Por lo tanto,
    escribimos lo siguiente (appendChild le enjareta el elemento entre paréntesis
      al elemento indicado):
    */
  list.appendChild(item);
})
})

/* btnComputadoras.addEventListener('click', event => {
  computadoras.forEach(function (marcas){
    let item = document.createElement('li');
    item.textContent = `${marcas}`;
  list.appendChild(item);
})
})

btnPersonas.addEventListener('click', event => {
  personas.forEach(function (persona){
    let item = document.createElement('li');
    item.textContent = `${persona}`;
  list.appendChild(item);
})
}) */