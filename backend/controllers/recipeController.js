const asyncHandler = require("express-async-handler");

const Recipe = require("../models/recipeModel");

const getAll = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find();
  res.status(200).json(recipes);
});

const getRecipe = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({ user: req.user.id });
  res.status(200).json(recipes);
});

const getOneRecipe = asyncHandler(async (req, res) => {
  const oneRecipe = await Recipe.findById(req.params.id);

  if (!oneRecipe) {
    res.status(404);
    throw new Error("Recipe not found");
  }

  res.status(200).json(oneRecipe);
});

const setRecipe = asyncHandler(async (req, res) => {
  const {
    recipe_img,
    recipe_name,
    description,
    prep_time,
    cook_time,
    servings,
    instructions,
    ingredients,
    tools,
  } = req.body;

  if (
    !recipe_img ||
    !recipe_name ||
    !description ||
    !prep_time ||
    !cook_time ||
    !servings ||
    !instructions ||
    !ingredients ||
    !tools
  ) {
    res.status(400);
    throw new Error("Please fill the required fields");
  }

  const recipe = await Recipe.create({
    recipe_img,
    recipe_name,
    description,
    prep_time,
    cook_time,
    servings,
    instructions,
    ingredients,
    tools,
    user: req.user.id,
  });

  res.status(200).json(recipe);
});

const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    res.status(400);
    throw new Error("Recipe not found");
  }

  //checking user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //matching user if logged in
  if (recipe.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("User not authorized");
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedRecipe);
});

const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    res.status(400);
    throw new Error("Recipe not found");
  }

  //checking user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //matching user if logged in
  if (recipe.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("User not authorized");
  }

  await Recipe.deleteOne(recipe);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAll,
  getRecipe,
  getOneRecipe,
  setRecipe,
  updateRecipe,
  deleteRecipe,
};
