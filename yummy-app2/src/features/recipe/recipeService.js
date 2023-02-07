import axios from "axios";

const API_URL = 'http://localhost:5300/api/v1/recipe'

//create recipe
const createRecipe = async (recipeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, recipeData, config)

    return response.data
}

//get recipes
const getRecipe = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//update recipe
const updateRecipe = async (recipeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + `/:${recipeId}`, recipeId, config)

    return response.data
}

//delete recipe
const deleteRecipe = async (user, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + `/:${user}`, user, config)

    return response.data
}

 const recipeService = {
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe
}

export default recipeService