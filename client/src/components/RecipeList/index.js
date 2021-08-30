import React from "react";
import RecipeItem from "../RecipeItem";
import { useQuery } from "@apollo/client";
import "../../index.css";

import { QUERY_RECIPES } from "../../utils/queries";

import Welcome from "../Welcome";

function RecipeList() {

	const { loading, data } = useQuery(QUERY_RECIPES);
	if (data) {
		console.log(data.allRecipes[0]);
	}
	const recipeData = data?.allRecipes || [];
	console.log(recipeData);

	return (
		<div className="space-y-5">
			<Welcome />
			<div className="flex flex-wrap content-between content-center justify-center justify-between">
				{recipeData.slice(0).reverse().map((recipe) => (
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
