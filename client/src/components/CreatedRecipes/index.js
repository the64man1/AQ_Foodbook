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
        <Card.Content>
            <p>{title}</p>
            <p>{instructions}</p>
            <Button className="ui button" onClick={() => handleDelete()}>
            Delete Recipe
            </Button>
        </Card.Content>
    )
}

export default CreatedRecipes;