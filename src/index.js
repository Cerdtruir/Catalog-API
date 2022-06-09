import './style.css';
import renderCountofMeals, { updateCounter } from './counter.js';

async function get(category) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse.meals;
}

async function getRecipeInfo(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse.meals[0];
}

async function postLikeAPI(itemID, heart, likeCounterNumber) {
  const currentValue = Number(likeCounterNumber.innerText);
  if (heart.innerHTML === '♡') {
    heart.innerHTML = '&#10084;';
    likeCounterNumber.innerText = currentValue + 1;
    await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes`,
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
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes`,
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}

async function postCommentAPI(itemID, name, comment) {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemID,
        username: name,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
}

async function getCommentAPI(itemID) {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments?item_id=${itemID}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}

function addCommentHTML(comment) {
  const listItem = document.createElement('li');
  listItem.classList.add('comment-list-item');
  const commentName = document.createElement('p');
  const commentText = document.createElement('p');
  const commentDate = document.createElement('p');
  commentName.innerText = `${comment.username}:`;
  commentText.innerText = `${comment.comment}`;
  commentDate.innerText = `${comment.creation_date}`;
  listItem.append(commentName, commentText, commentDate);
  document.body.querySelector('.comments-list').append(listItem);
}

async function commentSection(id) {
  document.body.querySelector('.comments-list').innerHTML = '';
  const comments = await getCommentAPI(id);
  if (Array.isArray(comments)) {
    comments.forEach((comment) => {
      addCommentHTML(comment);
    });
    updateCounter(comments);
    return;
  }
  document.body.querySelector('.comments-heading').innerText = 'Comments';
}

async function addComment(id) {
  const name = document.body.querySelector('.form-name').value;
  const comment = document.querySelector('.form-comment').value;
  if (name === '' || comment === '') {
    return;
  }
  await postCommentAPI(id, name, comment);
  const commentsArray = await getCommentAPI(id);
  const newComment = commentsArray[commentsArray.length - 1];
  addCommentHTML(newComment);
  updateCounter(commentsArray);
  document.body.querySelector('.form-name').value = '';
  document.querySelector('.form-comment').value = '';
}

const renderIngredients = (mealDetails) => {
  for (let i = 1; i < 20; i += 1) {
    const ingredients = document.createElement('li');
    const ingredient = `strIngredient${i}`;
    const measurement = `strMeasure${i}`;
    if (mealDetails[ingredient] === '') {
      return;
    }
    ingredients.innerText = `${mealDetails[measurement]} ${mealDetails[ingredient]}`;
    document.body
      .querySelector('.recipe-modal-ingredients')
      .append(ingredients);
  }
};

async function renderRecipeSection(id) {
  const mealDetails = await getRecipeInfo(id);
  document.body
    .querySelector('.recipe-details')
    .classList.remove('recipe-details-hide');
  document.body.querySelector('.recipe-modal-heading').innerText = mealDetails.strMeal;
  document.body.querySelector('.recipe-modal-image').src = mealDetails.strMealThumb;
  document.body.querySelector('.recipe-modal-instructions').innerText = mealDetails.strInstructions;
  document.body.querySelector('.recipe-modal-ingredients').innerHTML = '';

  renderIngredients(mealDetails);

  document.body.querySelector('.add-comment-button').onclick = () => {
    addComment(id);
  };
  commentSection(id);
}

const renderMeals = (meals, likesArray, page) => {
  meals.forEach((meal) => {
    const id = meal.idMeal;

    const recipeContainer = document.createElement('div');
    recipeContainer.classList.add('recipe-block');

    const image = document.createElement('img');
    image.classList.add('recipe-image');
    image.src = meal.strMealThumb;

    document.body.querySelector('.close-modal').onclick = () => {
      document.body
        .querySelector('.recipe-details')
        .classList.add('recipe-details-hide');
    };

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
      postLikeAPI(id, heart, likeCounterNumber);
    };

    const name = document.createElement('h3');
    name.classList.add('recipe-heading');
    name.innerText = meal.strMeal;

    const recipeButton = document.createElement('button');
    recipeButton.classList.add('recipe-button');
    recipeButton.innerText = 'Recipe';
    recipeButton.onclick = () => {
      renderRecipeSection(id);
    };

    textContainer.append(name, heart, likeCounterText, likeCounterNumber);
    recipeContainer.append(image, textContainer, recipeButton);
    page.appendChild(recipeContainer);
  });
};

async function generateRecipesPage(category) {
  const page = document.getElementById('main');
  const likesArray = await getLikeAPI();
  const meals = await get(category);

  page.innerHTML = '';

  renderCountofMeals(meals, category);

  renderMeals(meals, likesArray, page);
}

document.body.querySelector('.hamburger').onclick = () => {
  document.body.querySelector('.ul').classList.toggle('ul-show');
};

generateRecipesPage('seafood');

document.body.querySelector('.nav-seafood').onclick = () => {
  generateRecipesPage('seafood');
};

document.body.querySelector('.nav-vegetarian').onclick = () => {
  generateRecipesPage('vegetarian');
};

document.body.querySelector('.nav-chicken').onclick = () => {
  generateRecipesPage('chicken');
};
