let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.querySelector(".btn");
let color = document.querySelector(".color");
let defaultColor = document.querySelector(".default");
//Button Action :
button.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 1; i <= 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//Random number :
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//Default color ;

defaultColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f1f5f8";
});
