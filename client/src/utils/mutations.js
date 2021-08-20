import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        username
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addNewUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      user {
        id
        username
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export const CREATE_RECIPE = gql`
  mutation createRecipe(
      $title: String!
      $ingredients: [String!]
      $instructions: String!
      $image: String!
      $public: Boolean!
  ) {
      addRecipe(
          title: $title
          ingredients: $ingredients
          instructions: $instructions
          image: $image
          public: $public
      ) {
            title
            instructions
            ingredients
      }
  }
`;

export const DELETE_RECIPE = gql`
  mutation ($id: ID!) {
    deleteRecipe(recipeId: $id) {
        id
    }
  }
`;

//TODO: update user, update recipe (likes and change instructions/igredients), add comment
