import React from "react";




const mockData = [
  {
    //createdBy: "user1",
    title: "Good food",
    ingredients: ["onions", "celery"],
    instructions: "Cook this",
    numberOfLikes: 0,
    numberOfDislikes: 0,
    comments: [],
    image: "",
    public: true,
    categories: [],
  },
  {
    //createdBy: "user1",
    title: "Papri Chaat(Indian Street Snack)",
    ingredients: [
      "Chicpeas",
      "tamarind paste",
      "green pepper",
      "mint",
      "yogurt",
    ],
    instructions: "Boiled Chickpeas and mixed other ingrident to taste",
    numberOfLikes: 0,
    numberOfDislikes: 0,
    comments: [],
    image: "",
    public: true,
    categories: [],
  },
  {
    //createdBy: "user1",
    title: "Beef-Tataki",
    ingredients: [
      "beef cubes",
      "cucumber",
      "daikon",
      "fresh ginger",
      "garlic",
      "lemon",
    ],
    instructions:
      "Grill beef and cut into thinslices, slice daikon and cumbers into thin slices, pour soy sauce into small individual servings",
    numberOfLikes: 0,
    numberOfDislikes: 0,
    comments: [],
    image: "",
    public: true,
    categories: [],
  },
  {
    //createdBy: "user1",
    title: "Breakfast Tacos",
    ingredients: [
      "butter",
      "corn tortillas",
      "3 eggs",
      "red potatos",
      "shredded cheddar cheese",
    ],
    instructions:
      " Cook potatos in microwave, fry potatos with butter and make them slightly brown, add salt and pepper, add eggs to potato, heat tortillas in microwave for 45 seconds.",
    numberOfLikes: 0,
    numberOfDislikes: 0,
    comments: [],
    image: "",
    public: true,
    categories: [],
  },
  {
    //createdBy: "user1",
    title: "Dinner Tonight: Fish with Saffron-Tomato Cous Cous Recipe",
    ingredients: [
      " fillets white fish",
      "2 tablespoons olive oil",
      "2 tablespoons tomato paste",
      "1/4 teaspoon ",
      "garlic",
      "1/4 teaspoon red chile flakes, or more to taste",
      "1 pinch saffron, dissolved in a little hot fish stock or water",
      "1 1/2 cups instant cous cous",
      "2 tablespoons chopped parsley",
      "sliced or slivered almonds, for garnis",
    ],
    instructions: "Fry or Grill fish fillets and add other ingredients ",
    numberOfLikes: 0,
    numberOfDislikes: 0,
    comments: [],
    image: "",
    public: true,
    categories: [],
  },
  {
    //createdBy: "user1",
    title: "Pistachio Cake",
    ingredients: [
      "1 box White Cake Mix",
      "1 package 4 Ounce Pistachio Instant Pudding Mix",
      "1/2 cup Orange Juice",
      "1/2 cup Water",
      "1/2 cup Vegetable Oil",
      "4 whole Eggs",
      "3/4 cup Chocolate Syrup (such As Hershey",
    ],
    instructions:
      " Preheat oven to 350 degrees. Grease and flour bundt pan, Mix all ingredients but chocolate Syrup, Bake for 1 hour at 350 degrees.",
    numberOfLikes: 0,
    numberOfDislikes: 0,
    comments: [],
    image: "",
    public: true,
    categories: [],
  },
];


const Home = () => {


    return <React.Fragment>
        <div className="home-main-container">
            <div className="home-title-container">
                <h1>
                    Search for recipes to make your favorite dish, and save your favorite recipes for later.
                </h1>
            </div>
            <div className="home-search-input-container">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="home-recipe-container">
                {mockData.map(data => {
                    return (
                      <RecipeCard
                        title={data.title}
                        desc={data.instructions}
                        imgUrl={data.image}
                      />
                    );
                })}
            </div>
        </div>
    </React.Fragment>
}

const RecipeCard = ({title, desc, imgUrl}) => {

    return (
      <React.Fragment>
        <div className="recipe-card-container">
          <div className="left-container">
            <h2>{title}</h2>
            <h4>{desc}</h4>
            <div className="recipe-buttons-container">
              <button>Link</button>
              <button>Message</button>
            </div>
          </div>

          <div className="right-container">
            <div className="recipe-image-container">
              <img src={imgUrl} alt="some typa pic" />
            </div>
            <div className="recipe-image-container">
              <img src={imgUrl} alt="some typa pic" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Home;