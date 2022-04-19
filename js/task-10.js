function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
};
let width = 30;
let height = 30;
function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    boxes.push(box);
  }
  return refs.divBoxes.append(...boxes);
}
const destroyBoxes = () => {
  const boxes = refs.divBoxes.querySelectorAll('div');
  boxes.forEach((box) => box.remove());
  width = 30;
  height = 30;
  refs.input.value = null;
};

refs.input.addEventListener('input', onInput);
function onInput(event) {
  event.currentTarget.value = refs.input.value;
}

refs.btnCreate.addEventListener('click', () => createBoxes(refs.input.value));

refs.btnDestroy.addEventListener('click', destroyBoxes);
