export default function renderCountofMeals(mealsArray, pageClass) {
  const amountOfItems = mealsArray.length;
  if (!document.body.querySelector(`.nav-${pageClass}`).innerText.includes(')')) {
    document.body.querySelector(`.nav-${pageClass}`).append(` (${amountOfItems})`);
  }
  return amountOfItems;
}

export function updateCounter(commentsArray) {
  document.body.querySelector('.comments-heading').innerText = 'Comments';
  const counter = commentsArray.length;
  document.body.querySelector('.comments-heading').append(` (${counter})`);
  return counter;
}
