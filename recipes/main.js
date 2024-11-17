import recipes from './recipes.mjs';

const recipesContainer = document.querySelector('.recipes');

function renderRecipes(recipes) {
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <div class="tags">
                    <span>${recipe.tags.join(', ')}</span>
                </div>
                <h2>${recipe.name}</h2>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
                </div>
                <p>${recipe.description}</p>
            </div>
        `;

        recipesContainer.appendChild(recipeCard);
    });
}

renderRecipes(recipes);
