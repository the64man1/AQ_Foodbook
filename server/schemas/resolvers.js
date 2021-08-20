const { User, Recipe, Category } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id }).populate("createdRecipes");
        return userData;
      }
      throw new AuthenticationError("Please log in");
    },
    allRecipes: async () => {
      return await Recipe.find({}).populate("createdBy").populate("categories");
    },
    singleRecipe: async (parent, { _id }) => {
      return await Recipe.findById(_id);
    },
    categories: async () => {
      return await Category.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const emailParam = args.email;
      const usernameParam = args.username;
      const userEmail = await User.findOne({ emailParam }); // Check for if user's email exists already
      const username = await User.findOne({ usernameParam }); // Check for if user exists already

      if (userEmail) {
        const userEmailErrorMsg =
          "Email taken, please register with a new email account";

        throw new UserInputError(userEmailErrorMsg, {
          errors: { email: userEmailErrorMsg },
        });
      }

      if (username) {
        const usernameErrorMsg = "Username is taken";
        throw new UserInputError(usernameErrorMsg, {
          errors: { username: usernameErrorMsg },
        });
      }

      const newUser = await User.create(args);
      const token = signToken(newUser);

      return { token, user: newUser };
    },
    login: async (parents, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email not found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Password incorrect");
      }

      const token = signToken(user);

      return { token, user };
    },
    addRecipe: async (
      parent,
      { title, ingredients, instructions, image, public },
      context
    ) => {
      if (context.user) {
        const newRecipe = new Recipe({
          createdBy: context.user._id,
          title,
          ingredients,
          instructions,
          image,
          public,
        });

        await Recipe.create(newRecipe);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { createdRecipes: newRecipe },
        });

        return newRecipe;
      }

      // GraphQL - must add in HTTP Headers
      // {
      //   "Authorization": "Bearer AddTokenHere"
      // }

      // Throw error if user token is not provided
      throw new Error("Authorization token must be provided");
    },
    //TODO make delete recipe check if logged in user = recipe.createdBy
    deleteRecipe: async (parents, { recipeId }, context) => {
      if(context.user) {
        const recipe = await Recipe.findOneAndDelete({
          _id: recipeId
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { createdRecipes: recipe._id } }
        );

        return recipe;
      }

      // Throw error if user is not the creator
      throw new Error("Authorization token must be provided");
      }
  },
};

module.exports = resolvers;
