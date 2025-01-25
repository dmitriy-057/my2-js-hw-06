
const valueEl = document.querySelector("#value");
let counterValue = 0;

console.log(counterValue);

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtnEl);
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
console.log(incrementBtnEl)

decrementBtnEl.addEventListener('click', onDecrementBtnClick);

incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    if(counterValue < 0) {
        valueEl.style.color = 'red';
    }
    return valueEl;
}


function onIncrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
    if(counterValue > 0) {
        valueEl.style.color = 'green';
    }
    return valueEl;
}


