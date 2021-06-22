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

