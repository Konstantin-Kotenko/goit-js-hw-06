// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};
refs.button.addEventListener('click', onButtonClick);
function onButtonClick() {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.span.textContent = refs.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
