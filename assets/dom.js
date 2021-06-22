let subtitle = document.querySelector('#subtitle');
let parrafo = document.querySelector('#parrafo');
console.log('subtitle');
console.log(parrafo.textContent);

parrafo.textContent = 'Soy un parrafo creado en el DOM';
subtitle.textContent = 'Subtítulo';
subtitle.classList.add('red');

const animales = [
  'Perro',
  'Gato',
  'Mapache',
  'Pez',
  'Leopardo',
  'Ratón',
  'Zorro',
];

const list = document.querySelector('#list');

animales.forEach((animal, index) => {
  let item = document.createElement('li');
  item.textContent = `${index + 1} ${animal}`;
  list.appendChild(item);
});
