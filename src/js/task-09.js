function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  colorValue: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color")
};

const {body, colorValue, changeColorBtn} = refs;

changeColorBtn.addEventListener("click", onBtnClick);

function onBtnClick() {
const newColor = getRandomHexColor();
console.log(newColor)
body.style.backgroundColor = newColor;
colorValue.textContent = newColor;
}