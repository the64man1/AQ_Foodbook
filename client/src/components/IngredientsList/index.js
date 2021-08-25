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
                <p className="col-span-3">{ingredient}</p>
                <button className="close-button" aria-label="Close alert" type="button" data-close onClick={() => handleDel(index)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded col-span-1" onClick={() => handleDel(index)}>
                Remove ingredient
                </button> */}
                </>
            )
        })}
        </>
    )
}

export default IngredientsList;