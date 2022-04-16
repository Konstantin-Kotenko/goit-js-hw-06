let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
const valueEl = document.querySelector('#value');
console.log(valueEl);
decrementBtn.addEventListener('click', hendleDecrementBtnClick);
function hendleDecrementBtnClick() {
  valueEl.textContent = counterValue -= 1;
}
incrementBtn.addEventListener('click', handleIncrementBtnClick);
function handleIncrementBtnClick() {
  valueEl.textContent = counterValue += 1;
}
