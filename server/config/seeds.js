const db = require("./connection");
const { Category, Recipe, User } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Breakfast" },
    { name: "Lunch" },
    { name: "Dinner" },
    { name: "Appetizer" },
    { name: "Entree" },
    { name: "Side dish" },
    { name: "Dessert" },
  ]);

  console.log("categories seeded");

  await User.deleteMany();

  const user1 = await User.create({
    username: "user1",
    firstName: "Seed",
    lastName: "User",
    email: "user1@email.com",
    password: "password",
  });

  const user2 = await User.create({
    username: "user2",
    firstName: "Seed2",
    lastName: "User2",
    email: "user2@email.com",
    password: "password",
  });

  console.log("users seeded");

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      createdBy: user1._id,
      title: "Good food",
      ingredients: ["onions", "celery"],
      instructions: "Cook this",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username2",
          comment: "username2 commented a dislike",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "good-food.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user2._id,
      title: "Papri Chaat(Indian Street Snack)",
      ingredients: [
        "Chicpeas",
        "tamarind paste",
        "green pepper",
        "mint",
        "yogurt",
      ],
      instructions: "Boiled Chickpeas and mixed other ingrident to taste",
      likes: [{ username: "username2", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username1", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 commented a dislike",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Papri-Chaat.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user1._id,
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
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Beef-Tataki.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user2._id,
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
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],

      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Breakfast-Tacos.jpg",
      public: true,
      categories: categories[0]._id,
    },
    {
      createdBy: user1._id,
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
      likes: [
        { username: "username1", likedOn: new Date().toISOString() },
        { username: "username2", likedOn: new Date().toISOString() },
      ],
      dislikes: [],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 liked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Fish-Dinner.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user2._id,
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
      likes: [
        { username: "username1", likedOn: new Date().toISOString() },
        { username: "username2", likedOn: new Date().toISOString() },
      ],
      dislikes: [],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 liked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Pistachio-Cake.jpg",
      public: true,
      categories: categories[6]._id,
    },
    {
      createdBy: user1._id,
      title: "Pasta With Tuna ",
      ingredients: [
        "2 tablespoons flour",
        "1 cup green onions",
        "1.25 cups non-fat milk",
        "2 tablespoons olive oil",
        "2 tablespoons onion",
        "¼ cups parmesan cheese",
        "1 cup fresh parsley",
        "8 ounces pasta",
        "1 cup frozen peas",
        "6.5 ounces water-packed tun"
      ],
      instructions: "Cook pasta in a large pot of boiling water until al dente.\
      Drain and return to warm pot. Put olive oil in saucepan and add onion.\
      Saute until transparent. Stir in flour and cook for a few seconds and then \
      whisk in milk. Stir constantly until this thickens. Add peas, tuna (shredded into chunks,)\
       parsley, green onions, cheese and hot pepper sauce. Pour over pasta and stir gently to mix.\
      Serve at once. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "pasta-with-tuna.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user2._id,
      title: "Dinner Rolls ",
      ingredients: ["melted butter", "1 pound fresh pizza dough"],
      instructions: "Cook in the oven at 320 F for twenty minutes ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Dinner-Rolles.jpg",
      public: true,
      categories: categories[4]._id,
    },
    {
      createdBy: user1._id,
      title: "Strawberry Hazelnut Salad ",
      ingredients: [
        "8 oz salad green",
        "8 oz strawberries",
        "2 oz Hazelnuts",
        "3 oz Balsamic Vinegar",
        "1 tbs sugar",
        "4 oz Extra Virgin Olive Oil",
        "4 x salt and pepper",
      ],
      instructions: "mix evrything and sprinke hazlenut at the top  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "strawberry-Hazelnut-Salad.jpg",
      public: true,
      categories: categories[5]._id,
    },
    {
      createdBy: user2._id,
      title: " Pasta Frittata Recipe",
      ingredients: [
        "2 cups leftover pasta",
        "4 eggs beaten",
        "2 tablespoons butter",
        "1/2 cup whichever cheese the pasta called for",
      ],
      instructions:
        " Preheat the broiler on high with the rack on the second-highest shelf.\
        Mix pasta and beaten eggs in a large bowl and set aside. Heat the butter \
        in a small oven-proof pan (preferably cast-iron) over medium heat, then add pasta-egg mixture \
        and allow the bottom to set slightly (about 2-3 minutes). Lift up a corner, tilt the pan \
        and and allow the egg on top to run underneath. \
        Sprinkle the cheese over the top and place under broiler for 3-5 minutes until \
        cheese is melted and golden brown and eggs have set completely. \
        Remove pan from oven, loosen frittata from the bottom, cover the pan with a plate, \
        invert the frittata onto it, then flip the frittata cheese-side up using a spatula \
        Allow to cool slightly, then slice into wedges or squares and serve. ",

      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Pasta-Frittata.jpg",
      public: true,
      categories: categories[5]._id,
    },

    {
      createdBy: user1._id,
      title: "Guacamole Pasta ",
      ingredients: [
        "1/2 avocado",
        "100 grams penne pasta",
        "1/4 scallion",
        "1 red tomato",
        "1/4 splash lemon juiced",
        "salt to taste",
      ],
      instructions:
        " Peel and finely dice the avocado and thinly dice the tomato.\
         Put them all in a bowl. Add the lemon juice and a pinch of salt and mix well.\
        Once the pasta is done drain it and season with the 'guacamole'. \
         You can enjoy it hot or let it chill for a few hours in the fridge. It's always delicious!  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Guacamole-Pasta.jpg ",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user2._id,
      title: "Rosemary Ginger Fizz ",
      ingredients: [
        "1 1/4 Ounce Bombay East Gin",
        "1/2 Ounce Domaine Canton Ginger Liqueur",
        "1/4 Ounce Agave Nectar",
        "1/2 Ounce fresh squeezed lemon juice",
        "2 sprigs fresh rosemary",
        "2 Ounces Ginger Beer",
      ],
      instructions:
        " Add fresh squeezed lemon juice and rosemary into shaker and muddle. \
        Add Gin, Ginger Liqueur, and agave nectar into shaker with ice and shake vigorously.\
        Fill rocks glass with fresh ice Double strain contents of shaker into rocks glass. \
        Float 2 oz. of ginger beer and garnish with a fresh rosemary sprig.  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Rosemary-Ginger-Fizz.jpg ",
      public: true,
      categories: categories[4]._id,
    },
    {
      createdBy: user1._id,
      title: "Tomato Soup ",
      ingredients: [
        "1 bell pepper",
        "1 small celery",
        "some cooking oil",
        "2 carrots",
        "2 eggs",
        "some fresh parsley",
        "1 onion",
        "1 parsnip",
        "10 tablespoons semolina",
        "1 tablespoon sugar",
        "750 milliliters tomato juice",
      ],
      instructions:
        " It is very easy, first wash the vegetables and put it in a large pot (4 l).\
         Usually I chop Them All, beside parsnip and celery.\
        Fill half of the can with water THEN put it on the stove to boil. Add a little bit of salt.\
         When They are ready, add the tomato juice (or puree) and the oil and Give it to boil. \
        Taste for salt.Set aside and prepare the dumplings as Following:\
        Beat the eggs THEN add a pinch of salt.\
        Stir in the wheat semolina (8-10 tbsp), little by little, avoiding the lumps. \
        The Consistency of the composition must be like a tick cream.\
        Usually, for this soup, I boil separately Them, Because, It Happened to Me to Remain hard \
        in the middle, so we boil Them Will separate in the can with water.\
        Bring the water to a boil and add the dumplings with the spoon.\
        Let Them When They double in size and is ready, sprinkle a little bit of cold water on Their surface.\
        (Will this make more fluffy Them). Then add Them to the soup.\
        Chop the parsley and put in the soup.\
        Enjoy! ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Tomato-Soup.jpg ",
      public: true,
      categories: categories[3]._id,
    },
    {
      createdBy: user2._id,
      title: " Cake De Naranja",
      ingredients: [
        "½ cups butter",
        "1 cup sugar",
        "1 egg",
        "1 cup flour",
        "1 cup buttermilk",
        "1 orange rind",
        "1 teaspoon vanilla",
      ],
      instructions:
        " Mix and sift flour and salt. Cream butter and sugar, add beaten egg.\
        Add soda to buttermilk, add to butter mixture. Blend in flour, mix well, \
        add vanilla and grated orange rind. Mix until blended.\
        Bake in moderate oven for 30 to 40 minutes. PREPARE: juice of I orange, juice of 1 lemon, \
        cup sugar. Mix this well and when cake is done and cool pour over cake.",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Cake-Naranja.jpg ",
      public: true,
      categories: categories[6]._id,
    },
    {
      createdBy: user1._id,
      title: "Lamb Kebab Burger ",
      ingredients: [
        "2 tbsp fat-free yogurt",
        "1 tbsp mayonnaise",
        "1 small garlic clove , grated",
        "½ tbsp vegetable oil",
        "2 lamb burgers",
        "2 sesame seed burger buns",
        "1 tomato , sliced",
        "20g gherkins , sliced",
        "1 red chilli , finely sliced ",
      ],
      instructions:
        "Combine the yogurt with the mayonnaise and grated garlic in a small bowl.\
         Heat the vegetable oil in a non-stick frying pan over a medium heat, add the lamb burgers and fry \
         for around 10 mins, turning over halfway through, until piping hot in the centre. Lightly toast \
          the burger buns. Divide the sliced tomato, sliced gherkins,\
        the burgers, some garlic sauce, chilli and the lettuce leaves between each burger bun, \
        then enjoy immediately. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "lamb-kebab.jpg ",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user2._id,
      title: "Beef Cottage Pie ",
      ingredients: [
        "1 pound lean ground beef",
        "½ cups diced yellow onions",
        "½ cups diced celery",
        "1 tablespoon garlic",
        "1 teaspoon fresh thyme",
        "2 tablespoons worcestershire sauce",
        "1 tablespoon vegetable oil",
        "1 cup frozen root vegetables",
        "1 cup beef gravy",
        "3 cups potatoes",
        "3 tablespoons parmesan cheese",
      ],
      instructions:
        "Preheat oven to 375 degrees. In a large skillet, heat oil. Add onions, celery, \
        and garlic and cook until they are translucent but not brownedapproximately 5-6 minutes.\
        Remove to a clean dish. In the same skillet, add the ground beef and cook until browned. \
        Using a large spoon, discard any excess fat/grease.\
        Add the onions, celery, and garlic mixture back to skillet and stir well.\
         Add the worcestershire sauce, thyme and cook for an additional minute.\
        Add frozen vegetables and gravy and cook for an additional 2-3 minutes. \
        Season with salt and pepper. Cover a large casserole dish with cooking spray.\
        Pour the ground beef/vegetable mixture into the dish and spread evenly. \
        Spoon the mashed potatoes on top and carefully spread to create an even layer.\
        Sprinkle parmesan cheese all over the top and place the dish in the preheated oven. \
        Bake for 25-30 minutes.\
        Turn the oven broiler on and brown the top of the Shepherds Pie until it turns an even golden brown color.\
        Remove from the oven and allow to set for 5-10 minutes before serving. Enjoy! ",

      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Beef-Pie.jpg ",
      public: true,
      categories: categories[1]._id,
    },
  ]);

  console.log("recipes seeded");

  process.exit();
});
