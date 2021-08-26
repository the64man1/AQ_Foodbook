import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { DELETE_RECIPE } from '../../utils/mutations';

function CreatedRecipes(recipe) {
    const {
        id,
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

    const [deleteRecipe] = useMutation(DELETE_RECIPE);

    const handleDelete = async () => {
        console.log(id);
        const response = await deleteRecipe({
            variables: {
                id: id
            }
        })
        window.location.reload();
    }

    return (
        <div class="bg-white max-w-sm mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
      <div class="h-20 bg-green-500 h-5 flex items-center justify-between">
        <p class="mr-20 text-white text-lg ml-5 mt-1">{title}</p>
      </div>

      <p class="pt-3 text-lg tracking-wide ml-5">{instructions}</p>
      
      <button class="m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>
          Delete recipe
      </button>
    </div>
        // <Card.Content>
        //     <p>{title}</p>
        //     <p>{instructions}</p>
        //     <Button className="ui button" onClick={() => handleDelete()}>
        //     Delete Recipe
        //     </Button>
        // </Card.Content>
    )
}

export default CreatedRecipes;