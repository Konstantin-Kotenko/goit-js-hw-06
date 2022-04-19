// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

const hendleSpanInput = (event) => {
  if (event.currentTarget.value === '') {
    return (spanEl.textContent = 'Anonymous');
  }
  return (spanEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', hendleSpanInput);
