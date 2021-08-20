import React from "react";
import RecipeItem from "../RecipeItem";
import { useQuery } from "@apollo/client";
import beefPie from "../../images/Beef-Pie.jpg";
import beefTataki from "../../images/Beef-Tataki.jpg";
import guacamolePasta from "../../images/Guacamole-Pasta.jpg";
import breakfastTaco from "../../images/Breakfast-Tacos.jpg";
import goodFood from "../../images/good-food.jpg";
import PapriChaat from "../../images/Papri-Chaat.jpg";
import "../../index.css";

import { QUERY_RECIPES } from "../../utils/queries";

import Welcome from "../Welcome";

function RecipeList() {
	const mockData = [
		{
			//createdBy: "user1",
			title: "Good food",
			ingredients: ["onions", "celery"],
			instructions: "Cook this",
			numberOfLikes: 0,
			numberOfDislikes: 0,
			comments: [],
			image: goodFood,
			//public: true,
			categories: [],
		},
		{
			//createdBy: "user1",
			title: "Papri Chaat(Indian Street Snack)",
			ingredients: ["Chicpeas", "tamarind paste", "green pepper", "mint", "yogurt"],
			instructions: "Boiled Chickpeas and mixed other ingrident to taste",
			numberOfLikes: 0,
			numberOfDislikes: 0,
			comments: [],
			image: PapriChaat,
			//public: true,
			categories: [],
		},
		{
			//createdBy: users[0]._id,
			title: "Breakfast Tacos",
			ingredients: ["butter", "corn tortillas", "3 eggs", "red potatos", "shredded cheddar cheese"],
			instructions:
				"Cook potatos in microwave, fry potatos with butter and make them slightly brown, add salt and pepper, add eggs to potato, heat tortillas in microwave for 45 seconds.",
			numberOfLikes: 0,
			numberOfDislikes: 0,
			comments: [],
			image: breakfastTaco,
			//public: true,
			categories: [],
		},
	];

	const { loading, data } = useQuery(QUERY_RECIPES);
	if (data) {
		console.log(data.allRecipes[0]);
	}
	const recipeData = data?.allRecipes || [];
	console.log(recipeData);

	return (
		<div className="my-2">
			<Welcome />
			<h2>The Foodbook Recipes:</h2>
			<div className="flex-row">
				{recipeData.map((recipe) => (
					<RecipeItem
						key={recipe.id}
						id={recipe.id}
						image={recipe.image}
						title={recipe.title}
						instructions={recipe.instructions}
						ingredients={recipe.ingredients}
						createdBy={recipe.createdBy}
						likes={recipe.likes}
						dislikes={recipe.dislikes}
						comments={recipe.comments}
						categories={recipe.categories}
					/>
				))}
			</div>
		</div>
	);
}

export default RecipeList;
