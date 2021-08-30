import React from 'react';

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
                </>
            )
        })}
        </>
    )
}

export default IngredientsList;