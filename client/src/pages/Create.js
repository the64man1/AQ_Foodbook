import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { CREATE_RECIPE } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import IngredientsList from "../components/IngredientsList";
import { Input, TextareaAutosize, Button } from "@material-ui/core";
import Resizer from "react-image-file-resizer";

const NewRecipe = () => {
	//const { loading, data } = useQuery(QUERY_ME);
	//console.log(data.me.id);
	//const id = data.me.id;

	const [createRecipe] = useMutation(CREATE_RECIPE);
	const [errorText, setErrorText] = useState('');
	const [errorNoIndredients, setErrorNoIngredients] = useState('');

	const [formData, setFormData] = useState({
		title: "",
		ingredients: "",
		//categories: '',
		instructions: "",
		image: "",
		//isPublic:'',
		//createdBy:''
	});

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const ingredients = JSON.parse(localStorage.getItem("ingredients"));

		if (!ingredients) {
			setErrorNoIngredients('Please enter at least 1 ingredient to submit your recipe');
			return;
		}

		const mutationResponse = await createRecipe({
			variables: {
				title: formData.title,
				ingredients: ingredients,
				//categories: '6103400b528a0361e46c9738',
				instructions: formData.instructions,
				image: formData.image,
				public: true,
				//createdBy:'6103400b528a0361e46c974d',
			},
		});
		localStorage.removeItem("ingredients");
		setErrorNoIngredients('');
		window.location.assign("/");
		// const token = mutationResponse.data.addUser.token;
		// Auth.login(token);
		//console.log(mutationResponse);
	};

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      200,
      200,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImgUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      console.log(image);
      setFormData({ ...formData, image: image });
    } catch (err) {
      console.log(err);
    }
  };

	const addIngredient = (event) => {
		if (formData.ingredients.trim() === '') {
			setErrorText('Please enter an ingredient')
			return;
		}

		if (localStorage.getItem("ingredients") === null) {
			let ingredients = [];
			ingredients.push(formData.ingredients);
			localStorage.setItem("ingredients", JSON.stringify(ingredients));
			console.log(localStorage.getItem("ingredients"));
			setFormData({ ...formData, ingredients: "" });
			setErrorText('');
			console.log(formData.ingredients);
		} else {
			let ingredients = JSON.parse(localStorage.getItem("ingredients"));
			ingredients.push(formData.ingredients);
			console.log(ingredients);
			setFormData({ ...formData, ingredients: "" });
			console.log(formData.ingredients);
			setErrorText('');
			localStorage.setItem("ingredients", JSON.stringify(ingredients));
		}
	};

	return (
		<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-3/4">
                    <h1 class="mb-8 text-3xl text-center">Create Recipe</h1>
					<p>Recipe title:</p>
                    <input 
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="title"
                        type="title"
                        id="title"
                        placeholder="Title"
                        onChange={handleChange} />
					<p>Ingredients:</p>
					<div className="grid grid-cols-6 gap-3">
                    <input 
                        type="ingredients"
                        class="block border border-grey-light w-full p-3 rounded col-span-3 mb-3"
                        name="ingredients"
                        id="ingredients"
						value={formData.ingredients}
                        placeholder="Ingredient"
                        onChange={handleChange} />
					<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded col-span-1" style={{ height: "45px"}} onClick={addIngredient}>
                      Add ingredient
                    </button>
					{errorText ? (
						<div className="col-span-6 text-red-500 mb-3">
							<p>{errorText}</p>
						</div>
					) : null}
					</div>
					<div className="grid grid-cols-6 gap-3">
						<p className="col-span-6 mb-3">Ingredient list:</p>
						<IngredientsList />
					</div>
					<p>Instructions:</p>
                    <textarea
                        type="instructions"
                        class="form-textarea block border border-grey-light w-full p-3 rounded mb-4"
                        name="instructions"
                        id="instructions"
                        placeholder=""
                        onChange={handleChange} />

					<label>
						Please upload a picture if available:
						<input className="form-control" name="image" type="file" id="image" onChange={handleImgUpload} />
					</label>

				<br></br>
					{errorNoIndredients ? (
						<div className="col-span-6 text-red-500 mb-3">
							<p>{errorNoIndredients}</p>
						</div>
					) : null}
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleFormSubmit}>
                      Create Recipe
                    </button>
                </div>
            </div>
        </div>
		// <form>
		// 	<label>
		// 		Recipe name / title:
		// 		<Input className="form-control" name="title" type="title" id="title" onChange={handleChange} />
		// 	</label>
		// 	<br />
		// 	<label>
		// 		Ingredients:
		// 		<Input
		// 			className="form-control"
		// 			name="ingredients"
		// 			type="ingredients"
		// 			id="ingredients"
		// 			value={formData.ingredients}
		// 			onChange={handleChange}
		// 		/>
		// 		<Button onClick={addIngredient}>Add Ingredient</Button>
		// 	</label>
		// 	{errorText ? (
		// 		<div>
		// 			<p>{errorText}</p>
		// 		</div>
		// 	) : null}
		// 	<br />
		// 	<label>
		// 		Ingredients List:
		// 		<IngredientsList />
		// 	</label>
		// 	<br />
		// 	<label>
		// 		Instructions:
		// 		<TextareaAutosize
		// 			className="form-control"
		// 			name="instructions"
		// 			type="instructions"
		// 			id="instructions"
		// 			onChange={handleChange}
		// 		/>
		// 	</label>
		// 	<br />
			// <label>
			// 	Please upload a picture if available:
			// 	<Input className="form-control" name="image" type="file" id="image" onChange={handleImgUpload} />
			// </label>
		// 	<br />
		// 	<div className="flex-row flex-end">
		// 		<button type="submit" className="btn btn-primary mb-2"  onClick={handleFormSubmit}>
		// 			Submit
		// 		</button>
		// 	</div>
		// </form>
	);
};

export default NewRecipe;
