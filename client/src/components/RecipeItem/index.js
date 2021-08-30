import React from 'react';
import "./style.css"; 

function RecipeItem(recipe) {
    const {
        createdBy,
        title,
        ingredients,
        instructions,
        likes,
        dislikes,
        comments,
        image,
        //public,
        categories
    } = recipe;

    return (
      <div class="w-3/5 mb-4 py-4 px-8 bg-white shadow-lg rounded-lg m-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={`${image}`} alt="recipe pic" />
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">{title}</h2>
    <h5>
            <u>Ingredients:</u>
          </h5>
          <ul>
            {ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
      <hr></hr>
      <p class="mt-8"><h5><u>Instructions:</u></h5></p>
      <p class="text-gray-700 text-base">{instructions}</p>
  </div>
</div>
    );
}

export default RecipeItem;