export default function countMeals(mealsArray) {
  const amountOfItems = mealsArray.length;
  document.body.querySelector('.nav-seafood').append(` (${amountOfItems})`);
  return amountOfItems;
}
