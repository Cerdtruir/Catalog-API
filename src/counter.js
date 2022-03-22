export default function countMeals(mealsArray) {
  const amountOfItems = mealsArray.length;
  document.body.querySelector('.nav-seafood').append(` (${amountOfItems})`);
  return amountOfItems;
}

export function updateCounter(commentsArray) {
  document.body.querySelector('.comments-heading').innerText = 'Comments';
  const counter = commentsArray.length;
  document.body.querySelector('.comments-heading').append(` (${counter})`);
  return counter;
}
