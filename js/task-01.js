const itemEl = document.querySelectorAll('li.item');
console.log(`Number of categories:  ${itemEl.length}`);
itemEl.forEach((element) => {
  const titleEl = element.querySelector('h2');
  console.log(`Category: ${titleEl.textContent}`);
  const itemEl = element.querySelectorAll('li');
  console.log(`Elements: ${itemEl.length}`);
});
