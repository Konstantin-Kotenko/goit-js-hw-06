// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const hendleDecrementBtnClick = () => (valueEl.textContent = counterValue -= 1);
const handleIncrementBtnClick = () => (valueEl.textContent = counterValue += 1);

decrementBtn.addEventListener('click', hendleDecrementBtnClick);
incrementBtn.addEventListener('click', handleIncrementBtnClick);
