const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    savedRecipes: [Recipe]
    createdRecipes: [Recipe]
  }

  type Recipe {
    id: ID
    createdBy: UserRecipe
    title: String
    ingredients: [String]
    instructions: String
    likes: [Likes]
    dislikes: [Dislikes]
    comments: [Comments]
    image: String
    public: Boolean
    categories: [ID]
  }

  type UserRecipe {
    id: ID
    username: String
    firstName: String
    lastName: String
    email: String
  }

  type Likes {
    id: ID!
    username: String
    likedOn: String
  }

  type Dislikes {
    id: ID!
    username: String
    dislikedOn: String
  }

  type Comments {
    id: ID!
    username: String
    comment: String
    commentedOn: String
  }

  type Category {
    id: ID
    name: String
  }

  type Query {
    me: User
    allRecipes: [Recipe]
    singleRecipe: Recipe
    categories: [Category]
  }

  type Auth {
    token: ID!
    user: User
  }

  type NewRecipe {
    id: ID
    createdBy: ID
    title: String
    ingredients: [String]
    instructions: String
    image: String
    public: Boolean
    categories: [ID]
  }

  input NewRecipeInput {
    id: ID
    title: String
    ingredients: [String]
    instructions: String
    image: String
    public: Boolean
    categories: [ID]
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addRecipe(
      title: String
      ingredients: [String]
      instructions: String
      image: String
      public: Boolean
    ): NewRecipe!
    deleteRecipe(recipeId: ID!): Recipe
  }
`;

module.exports = typeDefs;
