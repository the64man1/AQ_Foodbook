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
		console.log(formData);
		const ingredients = JSON.parse(localStorage.getItem("ingredients"));
		console.log(ingredients);
		localStorage.removeItem("ingredients");
		console.log(formData.title);
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
		if (localStorage.getItem("ingredients") === null) {
			let ingredients = [];
			ingredients.push(formData.ingredients);
			localStorage.setItem("ingredients", JSON.stringify(ingredients));
			console.log(localStorage.getItem("ingredients"));
			setFormData({ ...formData, ingredients: "" });
			console.log(formData.ingredients);
		} else {
			let ingredients = JSON.parse(localStorage.getItem("ingredients"));
			ingredients.push(formData.ingredients);
			console.log(ingredients);
			setFormData({ ...formData, ingredients: "" });
			console.log(formData.ingredients);
			localStorage.setItem("ingredients", JSON.stringify(ingredients));
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label>
				Recipe name / title:
				<Input className="form-control" name="title" type="title" id="title" onChange={handleChange} />
			</label>
			<br />
			{/* <label>
            Recipe Category:
                <input 
                    name="category"
                    type="text" 
                    value={this.state.value} 
                    onChange={handleChange} />
            </label>
            <br /> */}
			<label>
				Ingredients:
				<Input
					className="form-control"
					name="ingredients"
					type="ingredients"
					id="ingredients"
					value={formData.ingredients}
					onChange={handleChange}
				/>
				<Button onClick={addIngredient}>Add Ingredient</Button>
			</label>
			<br />
			<label>
				Ingredients List:
				<IngredientsList />
			</label>
			<br />
			<label>
				Instructions:
				<TextareaAutosize
					className="form-control"
					name="instructions"
					type="instructions"
					id="instructions"
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Please upload a picture if available:
				<Input className="form-control" name="image" type="file" id="image" onChange={handleImgUpload} />
			</label>
			<br />
			{/* <label>
                Please check if you want this recipe to be public for others to see. 
                <input
                    name="isPublic"
                    type="checkbox"
                    checked={this.state.isPublic}
                    onChange={handleChange} />
            </label> */}
			<br />
			{/* <div className="flex-row flex-end">
            <Button type="submit" className="btn btn-primary mb-2">
            Submit
            </Button>
            </div>
            <input type="submit" value="Submit" /> */}
			<div className="flex-row flex-end">
				<button type="submit" className="btn btn-primary mb-2">
					Submit
				</button>
			</div>
		</form>
	);
};

export default NewRecipe;
