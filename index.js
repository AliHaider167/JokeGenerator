let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let joke = document.querySelector('.joke');
let button = document.querySelector('.btn');

console.log(joke);

let generateJoke = ()=>{
  fetch(url)
  .then(data => data.json())
  .then(item => {
    console.log(item);
    joke.innerHTML = `${item.joke}`;
  })
};

button.addEventListener('click', () => {
  generateJoke();
});

