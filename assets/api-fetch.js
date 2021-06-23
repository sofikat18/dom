let btnCats = document.querySelector('#buttonC');
btnCats.addEventListener('click', () => {
  let apiFetchC = fetch('https://api.thecatapi.com/v1/images/search');

  apiFetchC
    .then((resp) => resp.json())
    .then((data) => {
      let cat = document.querySelector('#catdog');
      cat.src = data[0].url;
      console.log(data[0].url);
    });
});

let btnDogs = document.querySelector('#buttonD');
btnDogs.addEventListener('click', () => {
  let apiFetchD = fetch('https://api.thedogapi.com/v1/images/search');

  apiFetchD
    .then((resp) => resp.json())
    .then((data) => {
      let dog = document.querySelector('#catdog');
      dog.src = data[0].url;
      console.log(data[0].url);
    });
});
