let nameInput = document.querySelector('#nameInput');

nameInput.addEventListener('keydown', function (event){
    //console.log(nameInput.value);
    nameHeader.textContent = nameInput.value
})

let button = document.querySelector("#button");
button.addEventListener('click', event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
})

/* 10 por lista: lista animales, lista de marcas de compus, lista de nombres de nuestros compañeros
se van a crear 3 botones 
for each
add event listener
printear en el html
*/