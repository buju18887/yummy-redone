import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import recipeService from './recipeService'

const initialState = {
    recipe: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

//create recipe
export const createRecipe = createAsyncThunk(
    'recipe/create',
    async(recipeData, thunkAPI) => {
        try {
           const token = thunkAPI.getState().auth.user.token  
           return await recipeService.createRecipe(recipeData, token)
        } catch (error) {
        const message =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        }
    }
)

//get recipes
export const getRecipe = createAsyncThunk(
    'recipe/getAll',
    async(recipeData, thunkAPI) => {
        try {
           const token = thunkAPI.getState().auth.user.token  
           return await recipeService.getRecipe(token)
        } catch (error) {
        const message =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        }
    }
)

//update recipes
export const updateRecipe = createAsyncThunk(
    'recipe/update',
    async(recipeId, thunkAPI) => {
        try {
           const token = thunkAPI.getState().auth.user.token  
           return await recipeService.updateRecipe(recipeId, token)
        } catch (error) {
        const message =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        }
    }
)

//delete recipes
export const deleteRecipe = createAsyncThunk(
    'recipe/delete',
    async(recipeId, thunkAPI) => {
        try {
           const token = thunkAPI.getState().auth.user.token 
           return await recipeService.deleteRecipe(recipeId, token)
        } catch (error) {
            const message =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        }
    }
)

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
          .addCase(createRecipe.pending, (state) => {
            state.isLoading = true
          })
          .addCase(createRecipe.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.recipes.push(action.payload)
          })
          .addCase(createRecipe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(getRecipe.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getRecipe.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.recipe = action.payload
          })
          .addCase(getRecipe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(updateRecipe.pending, (state) => {
            state.isLoading = true
          })
          .addCase(updateRecipe.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.recipe = state.recipe.filter(
              (recipe) => recipe._id !== action.payload.id
            )
          })
          .addCase(updateRecipe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(deleteRecipe.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deleteRecipe.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.recipe = state.recipe.filter(
              (recipe) => recipe._id !== action.payload.id
            )
          })
          .addCase(deleteRecipe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
      },
})

export const {reset} = recipeSlice.actions
export default recipeSlice.reducer