// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  inputEl: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
};

const hendleFontSizeInput = (event) =>
  (refs.spanEl.style.fontSize = `${event.currentTarget.value}px`);

refs.inputEl.addEventListener('input', hendleFontSizeInput);
