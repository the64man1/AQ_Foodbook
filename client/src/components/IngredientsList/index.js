import React from 'react';
import { Card, Button } from 'semantic-ui-react';

function IngredientsList(ingredient) {
    const ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    const handleDel= (index) => {
        console.log(`Delete ${index}`)
        let ingredients = JSON.parse(localStorage.getItem("ingredients"));
        ingredients.splice(index, 1);
        localStorage.setItem("ingredients", JSON.stringify(ingredients));
        window.location.reload();
    }

    return (
        <>
        {ingredients.map((ingredient, index) => {
            return (
                <>
                <p>{ingredient}</p>
                <button className="ui button" onClick={() => handleDel(index)}>
                Remove ingredient
                </button>
                </>
            )
        })}
        </>
    )
}

export default IngredientsList;