const inputEl = document.querySelector('input#name-input');
console.log(inputEl);
const spanEl = document.querySelector('span#name-output');
console.log(spanEl);
inputEl.addEventListener('input', (event) => {
  if (event.currentTarget.value === '') {
    return (spanEl.textContent = 'Anonymous');
  }
  return (spanEl.textContent = event.currentTarget.value);
});
