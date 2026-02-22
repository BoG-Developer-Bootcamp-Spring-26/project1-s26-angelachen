let pokeCounter = 1;
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const infoButton = document.getElementById("info-button");
const movesButton = document.getElementById("moves-button");

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  const image = data.sprites.front_default;
  document.getElementById("poke-img").src = image;

  const name = data.name;
  document.getElementById("name").textContent = name;
  console.log(data);
}

leftButton.addEventListener("click", function () {
  if (pokeCounter > 0) {
    pokeCounter = pokeCounter - 1;
  }
  getPokemon(pokeCounter);
});

rightButton.addEventListener("click", function () {
  if (pokeCounter > 0) {
    pokeCounter = pokeCounter + 1;
  }
  getPokemon(pokeCounter);
});
