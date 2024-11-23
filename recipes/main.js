import recipes from './recipes.mjs';


function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? '⭐' : '☆';
  }
  html += '</span>';
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}">
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2>${recipe.name}</h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>
  `;
}

function renderRecipes(recipeList) {
  const recipesContainer = document.querySelector('.recipes');
  recipesContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function filterRecipes(query) {
  return recipes
    .filter(recipe => {
      const lowerQuery = query.toLowerCase();
      return (
        recipe.name.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector('.search-form input').value;
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

// Attach the event listener for search functionality
document.querySelector('.search-form').addEventListener('submit', searchHandler);

// Initialize the app
init();
