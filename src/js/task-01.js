const categoriesListEl = document.querySelector('#categories');
console.log(categoriesListEl);

const itemsList = categoriesListEl.querySelectorAll(".item");
console.log(itemsList);

//количество категорий
console.log('Number of categories:', itemsList.length);

itemsList.forEach(item => {
    const itemTitle = item.querySelector('h2');
    // название айтема
    console.log('Category', itemTitle);
    const items = item.querySelectorAll('ul > li');
    console.log('Elements', items.length);
});


