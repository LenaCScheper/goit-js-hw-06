const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const  listForAddingItems = document.querySelector(`#ingredients`);

const addListItems = (array) => {
    const  listArray  = array.map(item  => {
        const  listItem  = document.createElement('li');
        listItem.textContent = item;
        return  listItem;
    } )
    listForAddingItems.append(...listArray);
}

addListItems(ingredients);
