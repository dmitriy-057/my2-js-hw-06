const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputEl);

function onInputEl() {
    if(inputEl.value === '') {
        spanEl.textContent = "Anonymous";
    } else {
     spanEl.textContent = inputEl.value; 
     console.log(inputEl.value);
    }
}

