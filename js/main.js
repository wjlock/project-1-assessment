const countDisplay = document.getElementById('count-display');
const plusButton = document.getElementById('plus-sign');
const inputValue = document.getElementById('input-value');
const minusButton = document.getElementById('minus-sign');
let counter = 0;

plusButton.addEventListener('click', addInputToCounter);
minusButton.addEventListener('click', removeInputfromCounter);


















// Funcitons

function addInputToCounter() {
    counter = counter + parseInt(inputValue.value)
    console.log(counter)
    countDisplay.innerHTML = counter
}
function removeInputfromCounter(){
    counter = counter - parseInt(inputValue.value)
    console.log(counter)
    countDisplay.innerHTML = counter
}