import SideNav from "../components/SideNav"
import { FaSearch } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { reset } from '../features/auth/authSlice'
import { getRecipe } from '../features/recipe/recipeSlice'
import RecipeItem from '../components/RecipeItem'


const MyRecipes = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isError, message } = useSelector((state) => state.auth)
  const {recipe} = useSelector((state) => state.recipe)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getRecipe())

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])


  return (
    <div className='bg-gray-900 relative flex'>
        <SideNav />
        <div className="w-full ml-56">
            <div className="flex justify-between p-3">
                <div className="text-4xl font-bold text-yellow-500">My Recipes</div>
                <div className="p-4">
                    <input type="search" placeholder="Search recipes here" className='w-96 h-7 rounded-md placeholder:text-center border border-yellow-500 placeholder:text-yellow-500'/>
                    <button className='bg-yellow-500 w-6 h-6 rounded-full items-center ml-5'><FaSearch className='mx-auto'/></button>
                </div>
                <div className="logo">
                    <img src="/logo 3.png" alt="Yummy" className="" width={172} height={70}/>
                </div> 
            </div>
            <div className="w-full mx-auto mt-0 text-center pt-3">
        <section className='w-2/3 mx-auto'>
        {recipe ? (
          <div className='grid gap-y-2 gap-x-1 pt-36 pl-10 grid-cols-3 pb-96'>
            {recipe.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3 className="text-gray-200 text-lg">You have not set any liked recipes</h3>
        )}
      </section>
       </div>
          </div>
    </div>
  )
}

export default MyRecipes