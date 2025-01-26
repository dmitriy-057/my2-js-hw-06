const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputEl);

function onInputEl() {
    spanEl.textContent = inputEl.value; 
    console.log( spanEl.textContent);
    console.log(inputEl.value);

}