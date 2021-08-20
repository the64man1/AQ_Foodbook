import React from 'react';

function IngredientsList(ingredient) {
    const ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    return (
        <>
        {ingredients.map((ingredient) => {
            return <p>{ingredient}</p>
        })}
        </>
    )
}

export default IngredientsList;