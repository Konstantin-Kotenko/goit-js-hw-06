// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refs = {
  inputEl: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
};
console.log(refs.inputEl);
console.log(refs.spanEl);
refs.inputEl.addEventListener('input', (event) => {
  refs.spanEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event.currentTarget.value);
  console.log(refs.spanEl);
});
