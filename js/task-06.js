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
