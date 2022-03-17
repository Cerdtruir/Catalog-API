async function get(category) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse.meals;
}

