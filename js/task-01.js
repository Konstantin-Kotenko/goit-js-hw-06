const asfaf = document.querySelectorAll('li.item');
console.log(`Number of categories:  ${asfaf.length}`);
asfaf.forEach((element) => {
  const sfas = element.querySelector('h2');
  console.log(`Category: ${sfas.textContent}`);
  const safsa = element.querySelectorAll('li');
  console.log(`Elements: ${safsa.length}`);
});
