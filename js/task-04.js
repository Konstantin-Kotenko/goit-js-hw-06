let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
decrementBtn.addEventListener('click', hendleDecrementBtnClick);
function hendleDecrementBtnClick() {
  valueEl.textContent = counterValue -= 1;
}
incrementBtn.addEventListener('click', handleIncrementBtnClick);
function handleIncrementBtnClick() {
  valueEl.textContent = counterValue += 1;
}
