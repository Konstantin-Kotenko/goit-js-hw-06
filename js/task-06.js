const inputEl = document.querySelector('input#validation-input');
console.log(inputEl);
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
  return;
}
