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
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <img class="h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center inline-block align-middle overflow-hidden" src={`${image}`} alt="img of recipe" />
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
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
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">createdBy: </p>
      </div>
    </div>
  </div>
</div>

      // <div className="card">
      //   <div className="card-body">
      //   <img width="200" height="200" src={`${image}`} alt="img of recipe" />
      //     <h2 className="card-title">{title}</h2>
      //     <h5>
      //       <u>Ingredients:</u>
      //     </h5>
      //     <ul>
      //       {ingredients.map((ingredient) => {
      //         return <li>{ingredient}</li>;
      //       })}
      //     </ul>
          
      //     <h5>
      //       <u>Instructions:</u>
      //     </h5>
      //     <p class="card-text">{instructions}</p>
      //   </div>
      // </div>
      
    );
}

export default RecipeItem;