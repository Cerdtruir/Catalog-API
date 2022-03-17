import './style.css';

async function get(category) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse.meals;
}

async function likeAPI(itemID, heart, likeCounterNumber) {
  const currentValue = Number(likeCounterNumber.innerText);
  if (heart.innerHTML === '♡') {
    heart.innerHTML = '&#10084;';
    likeCounterNumber.innerText = currentValue + 1;
    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gPGYyR5ezimXgm2rDsPh/likes',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemID,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }
}

async function getLikeAPI() {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gPGYyR5ezimXgm2rDsPh/likes',
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}

async function generateHTML() {
  const page = document.getElementById('main');
  const likesArray = await getLikeAPI();
  const meals = await get('seafood');
  meals.forEach((meal) => {
    const id = meal.idMeal;
    const recipeContainer = document.createElement('div');
    recipeContainer.classList.add('recipe-block');

    const image = document.createElement('img');
    image.classList.add('recipe-image');
    image.src = meal.strMealThumb;

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const likeCounterText = document.createElement('p');
    likeCounterText.innerText = 'Likes: ';

    const likeCounterNumber = document.createElement('p');
    likeCounterNumber.classList.add('links-counter');
    likesArray.forEach((like) => {
      if (like.item_id === id) {
        likeCounterNumber.innerText = like.likes;
      }
    });
    if (likeCounterNumber.innerText === '') {
      likeCounterNumber.innerText = 0;
    }

    const heart = document.createElement('p');
    heart.classList.add('heart');
    heart.innerHTML = '&#9825';
    heart.onclick = () => {
      likeAPI(id, heart, likeCounterNumber);
    };

    const name = document.createElement('h3');
    name.classList.add('recipe-heading');
    name.innerText = meal.strMeal;

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.innerText = 'Comments';

    const reservationsButton = document.createElement('button');
    reservationsButton.classList.add('reservations-button');
    reservationsButton.innerText = 'Reservations';

    textContainer.append(name, heart, likeCounterText, likeCounterNumber);
    recipeContainer.append(image, textContainer, commentsButton, orderButton);
    page.appendChild(recipeContainer);
  });
}

generateHTML();
