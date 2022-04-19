const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

const hendleSpanInput = (event) => {
  if (event.currentTarget.value === '') {
    return (spanEl.textContent = 'Anonymous');
  }
  return (spanEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', hendleSpanInput);
