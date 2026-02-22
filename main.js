let pokeCounter = 133;
let infoMoves = true; //true is info, moves is false;
let data = null;

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const infoButton = document.getElementById("info-button");
const movesButton = document.getElementById("moves-button");

const typeColor = new Map([
  ["normal", "#A8A77A"],
  ["fire", "#EE8130"],
  ["water", "#6390F0"],
  ["electric", "#F7D02C"],
  ["grass", "#7AC74C"],
  ["ice", "#96D9D6"],
  ["fighting", "#C22E28"],
  ["poison", "#A33EA1"],
  ["ground", "#E2BF65"],
  ["flying", "#A98FF3"],
  ["psychic", "#F95587"],
  ["bug", "#A6B91A"],
  ["rock", "#B6A136"],
  ["ghost", "#735797"],
  ["dragon", "#6F35FC"],
  ["dark", "#705746"],
  ["steel", "#B7B7CE"],
  ["fairy", "#D685AD"],
  [null, null],
]);
async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  data = await response.json();

  const image = data.sprites.front_default;
  document.getElementById("poke-img").src = image;

  const name = data.name;
  document.getElementById("name").textContent = name;
  console.log(data);

  type1 = data.types[0].type.name;
  type2 = null;

  if (data.types[1] !== null && data.types[1] !== undefined) {
    type2 = data.types[1].type.name;
    document.getElementById("type-2").textContent = type2;
    document.getElementById("type-2").style.backgroundColor =
      typeColor.get(type2);
  } else {
    document.getElementById("type-2").textContent = "";
    document.getElementById("type-2").style.backgroundColor = "transparent";
  }
  document.getElementById("type-1").textContent = type1;
  document.getElementById("type-1").style.backgroundColor =
    typeColor.get(type1);
  loadInfoMoves();
}
leftButton.addEventListener("click", () => {
  if (pokeCounter > 1) {
    pokeCounter = pokeCounter - 1;
  }
  console.log(pokeCounter);
  getPokemon(pokeCounter);
});

rightButton.addEventListener("click", () => {
  if (pokeCounter < 1025) {
    pokeCounter = pokeCounter + 1;
  }
  console.log(pokeCounter);
  getPokemon(pokeCounter);
});
function loadInfoMoves() {
  if (infoMoves) {
    document.getElementById("info-moves-title").textContent = "Info";
    document.getElementById("height").textContent =
      "height: " + data.height / 10 + " m";
    document.getElementById("weight").textContent =
      "weight: " + data.weight / 10 + " kg";
    document.getElementById("hp").textContent =
      "hp: " + data.stats[0].base_stat;
    document.getElementById("attack").textContent =
      "attack: " + data.stats[1].base_stat;
    document.getElementById("defense").textContent =
      "defense: " + data.stats[2].base_stat;
    document.getElementById("special-attack").textContent =
      "special-attack: " + data.stats[3].base_stat;
    document.getElementById("special-defense").textContent =
      "special-defense: " + data.stats[4].base_stat;
    document.getElementById("speed").textContent =
      "speed: " + data.stats[5].base_stat;
  } else {
    document.getElementById("info-moves-title").textContent = "Moves";
  }
}
infoButton.addEventListener("click", () => {
  infoMoves = true;
  infoButton.style.backgroundColor = "#adff2f";
  movesButton.style.backgroundColor = "#d3d3d3";
  loadInfoMoves();
});

movesButton.addEventListener("click", () => {
  infoMoves = false;
  movesButton.style.backgroundColor = "#adff2f";
  infoButton.style.backgroundColor = "#d3d3d3";
  loadInfoMoves();
});
