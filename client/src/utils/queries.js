import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
        username
        firstName
        lastName
        email
        createdRecipes {
            id
            title
            instructions
        }
    }
}`;

export const QUERY_RECIPES = gql`
query allRecipes {
    allRecipes {
      id
      title
      createdBy {
        id
        username
        firstName
        lastName
        email
      }
      ingredients
      instructions
      likes {
        username
      }
      dislikes {
        username
      }
      image
    }
  }`;

export const QUERY_SINGLE_RECIPE = gql`
    query singleRecipe($recipeID: ID) {
        singleRecipe(id: $recipeID) {
        id
        title
        categories
        ingredients
        instructions
        likes {
            username
            likedOn
        }
        dislikes{
            username
            dislikedOn
        }
        comments {
            username
            comment
            commentedOn
        }
        public
        image
        }
    }
`;
