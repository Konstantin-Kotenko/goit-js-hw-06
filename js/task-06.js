// // Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('input#validation-input');

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
}

inputEl.addEventListener('blur', onInputBlur);

// а я міг би замість (event.currentTarget.value.length === +inputEl.dataset.length)
// написати так event.currentTarget.value.length == inputEl.dataset.length ?  воно би автоматично перевелось в тип який мені потрібно
