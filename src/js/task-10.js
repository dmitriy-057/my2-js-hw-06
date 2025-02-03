function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("input");
console.log(inputEl.value);
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if(amount > 0) {
    createBoxes(amount);
  }
});

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let size = 30;

  for(let i = 0; i < amount; i += 1) {
    console.log('i', i);
    
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
    size +=10;
  }
}
destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}