const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');
console.log(ingredientsEl);
ingredients.map((element) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = `${element}`;
  ingredientsEl.append(item);
  console.log(item);
});
