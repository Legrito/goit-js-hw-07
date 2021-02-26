const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector("#ingredients");

const makeListItems = ingredientsList => {
  return ingredientsList.map((ingredient) => {
      
    const ingredientsListItemEl = document.createElement("li");
    ingredientsListItemEl.textContent = ingredient;
      
    return ingredientsListItemEl;
        
  });
};

const ingredientsListItem = makeListItems(ingredients);

ingredientsListRef.append(...ingredientsListItem);