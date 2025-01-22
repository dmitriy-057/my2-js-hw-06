const categoriesListEl = document.querySelector('#categories');
console.log(categoriesListEl);

const itemsList = categoriesListEl.querySelectorAll(".item");
console.log(itemsList);

console.log('Number of categories:', itemsList.length);

itemsList.forEach(item => {
    const itemTitle = item.querySelector('h2')
    console.log(itemTitle)
})