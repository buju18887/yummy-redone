const express = require("express");
const {
  getRecipe,
  setRecipe,
  updateRecipe,
  deleteRecipe,
  getOneRecipe,
  getAll,
} = require("../controllers/recipeController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

/**
 * @swagger
 * components:
 *   schemas:
 *     recipe:
 *       type: object
 *       required:
 *         - recipe_img
 *         - recipe_name
 *         - description
 *         - prep_time
 *         - cook_time
 *         - servings
 *         - instructions
 *         - ingredients
 *         - tools
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto generated id for the recipe
 *         user:
 *           type: string
 *           description: The auto generated id for the user that is the foreign key to the recipe schema
 *         recipe_img:
 *           type: string
 *           description: Recipe image that is stored as a string in base64
 *         recipe_name:
 *           type: string
 *           description: Name for the recipe
 *         description:
 *           type: string
 *           description: The brief description of the recipe
 *         prep_time:
 *           type: number
 *           description: Time it takes to prepare the recipe
 *         cook_time:
 *           type: number
 *           description: Time it takes to cook the recipe
 *         servings:
 *           type: number
 *           description: Number of people the recipe can serve
 *         instructions:
 *           type: string
 *           description: Recipe instructions
 *         ingredients:
 *           type: string
 *           description: Recipe ingredients
 *         tools:
 *           type: string
 *           description: Tools required for the recipe
 *       example:
 *         _id: 63ed2add1a70eabdec575689 
 *         user: 63ed2add1a70eabdec575689 
 *         recipe_img: string 
 *         recipe_name: string 
 *         description: string 
 *         prep_time: 5 
 *         cook_time: 5 
 *         servings: 5 
 *         instructions: string
 *         ingredients: string
 *         tools: string
 *   securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: The recipe managing API
 */

/**
 * @swagger
 * /api/v1/recipe/{id}:
 *   get:
 *     summary: Returns a list of recipes created by user
 *     tags: [Recipes]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *         - name: id
 *           in: path
 *           type: string
 *           required: true
 *           description: The user id
 *     responses:
 *        200:
 *          description: The list of recipes
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/recipe'
 *        401:
 *          description: Unauthorized. No token provided
 */

router.get("/:id", protect, getRecipe);

/**
 * @swagger
 * /api/v1/recipe:
 *   get:
 *     summary: Returns a list of all recipes
 *     tags: [Recipes]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *        200:
 *          description: The list of recipes
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/recipe'
 *        401:
 *          description: Unauthorized. No token provided
 */

router.get('/', protect, getAll)

/**
 * @swagger
 * /api/v1/recipe/singlerecipe/{id}:
 *   get:
 *     summary: Returns a recipe by id 
 *     tags: [Recipes]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *         - name: id
 *           in: path
 *           type: string
 *           required: true
 *           description: The recipe id
 *     responses:
 *        200:
 *          description: The recipe description by id
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/recipe'
 *        404:
 *          description: The recipe is not found
 *        401:
 *          description: Unauthorized. No token provided
 */

router.get("/singlerecipe/:id", protect, getOneRecipe);

/**
 * @swagger
 * /api/v1/recipe:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/recipe'
 *     responses:
 *       200:
 *         description: The recipe was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/recipe'
 *       400:
 *         description: Please fill all required fields
 *       401:
 *         description: Unauthorized. No token provided
 *       500:
 *          description: Server error
 */

router.post("/", protect, setRecipe);

/**
 * @swagger
 * /api/v1/recipe/{id}:
 *   put:
 *     summary: Update recipe by id
 *     tags: [Recipes]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The recipe id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/recipe'
 *     responses:
 *       200:
 *         description: The recipe was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/recipe'
 *       400:
 *         description: Recipe not found
 *       401:
 *         description: User not found
 *       404:
 *         description: Unauthorized. No token provided
 *       500:
 *         description: Server error
 */

router.put("/:id", protect, updateRecipe);

/**
 * @swagger
 * /api/v1/recipe/{id}:
 *   delete:
 *     summary: Delete recipe by id
 *     tags: [Recipes]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The recipe id
 *     responses:
 *       200:
 *         description: The recipe was deleted
 *       400:
 *         description: Recipe not found
 *       401:
 *         description: User not found
 *       404:
 *         description: Unauthorized. No token provided
 *       500:
 *         description: Server error
 */

router.delete("/:id", protect, deleteRecipe);

module.exports = router;
