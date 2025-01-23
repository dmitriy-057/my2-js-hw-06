const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const listItems = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  console.log(itemEl);
  return itemEl;
});

ingredientsList.append(...listItems);
console.log(ingredientsList);





