async function get(category) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse.meals;
}

async function generateHTML() {
  const meals = await get('seafood');
  console.log(meals);
  const page = document.getElementById('main');
  meals.forEach((meal) => {
    const recipeContainer = document.createElement('div');
    recipeContainer.classList.add('recipe-block');

    const image = document.createElement('img');
    image.classList.add('recipe-image');
    image.src = meal.strMealThumb;

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '&#9825';

    const name = document.createElement('h3');
    name.classList.add('recipe-heading');
    name.innerText = meal.strMeal;

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.innerText = 'Comments';

    const reservationsButton = document.createElement('button');
    reservationsButton.classList.add('reservations-button');
    reservationsButton.innerText = 'Reservations';

    textContainer.append(name, heart);
    recipeContainer.append(
      image,
      textContainer,
      commentsButton,
      reservationsButton,
    );
    page.appendChild(recipeContainer);
  });
}

generateHTML();
