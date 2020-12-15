// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");

let i = 1;

while (i <= 100) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  pokemon.appendChild(label);
  pokemon.appendChild(newImg);
  container.appendChild(pokemon);
  i++;
}
