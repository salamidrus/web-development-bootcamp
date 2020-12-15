// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");

let i = 1;

while (i <= 100) {
  const newImg = document.createElement("img");
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  container.appendChild(newImg);
  i++;
}
