const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');
const ingredientsMap = ingredients.map((element) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = `${element}`;
  return item;
});
ingredientsEl.append(...ingredientsMap);
