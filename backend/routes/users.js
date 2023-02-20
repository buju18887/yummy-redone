const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - age
 *         - country
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto generated id for the user
 *         name: 
 *           type: string
 *           description: The full name of the user
 *         email: 
 *           type: string
 *           description: The email of the user
 *         password: 
 *           type: string
 *           description: The hashed password of the user
 *         age: 
 *           type: number
 *           description: The age of the user
 *         country: 
 *           type: string
 *           description: The country of the user
 *         token:
 *           type: string
 *           description: The auto generated token to authenticate the user
 *       example:
 *          _id: 63ed2add1a70eabdec575689
 *          name: string 
 *          email: string@email.com 
 *          password: string 
 *          age: 10 
 *          country: string 
 *          token: string
 */

/**
 * @swagger
 *  tags:
 *   name: Users
 *   description: The user managing API
 */

/**
 * @swagger
 * /api/v1/users/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/user'
 *     responses:
 *        200:
 *          description: User successfully created an account
 *        400:
 *          description: Please add all fields
 *        401:
 *          description: User already exists
 *        404:
 *          description: Invalid user data
 *        500:
 *          description: Server error
 */

// signup
router.post('/signup', registerUser);  

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Users]
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/user'
 *     responses:
 *        200:
 *          description: User successfully logged in
 *          content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/user'
 *        400:
 *          description: Invalid credentials
 *        500:
 *          description: Server error
 */
         
// Login
router.post('/login', loginUser);
  
  module.exports = router;

  