const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  title: String,
  ingredients: [String],
  instructions: String,
  likes: [
    {
      username: String,
      likedOn: String,
    },
  ],
  dislikes: [
    {
      username: String,
      dislikedOn: String,
    },
  ],
  comments: [
    {
      username: String,
      comment: String,
      commentedOn: String,
    },
  ],
  image: String,
  public: Boolean,
  categories: [
    {
      type: Schema.Types.ObjectId, ref: "Category"
    }
  ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
