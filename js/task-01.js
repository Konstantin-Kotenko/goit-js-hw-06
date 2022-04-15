const categoriesEl = document.querySelector('#categories');
console.log(`categories: ${categoriesEl.children.length}`);
const category = categoriesEl.querySelectorAll('h2');
console.log(category[0].textContent);
console.log(category[1].textContent);
console.log(category[2].textContent);
