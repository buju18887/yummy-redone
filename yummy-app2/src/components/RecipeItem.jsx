import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipe/recipeSlice'

function RecipeItem({recipe}) {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(deleteRecipe(recipe._id))
  } 

  return (
    <div className='bg-yellow-400 relative my-3 py-5 rounded-lg'>
      <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
      <h2 className='text-xl font-bold'>{recipe.recipe_name}</h2>
      <button onClick={onClick} className='absolute cursor-pointer top-3 right-4 font-extrabold text-red-900'>
        X
      </button>
    </div>
  )
}

export default RecipeItem
