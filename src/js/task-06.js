const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", onInputEl);

function onInputEl() {
    console.log(inputEl.value);
    console.log(inputEl.dataset);

     if(inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.add("invalid");
    } else if(inputEl.value.length >= inputEl.dataset.length) {
        inputEl.classList.replace("invalid", "valid");
    } 
}