import SideNav from "../components/SideNav"
import { FaClock, FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import { reset } from '../features/auth/authSlice'
import {createRecipe} from '../features/recipe/recipeSlice'

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    recipe_img: '',
    recipe_name: '',
    description: '',
    prep_time: '',
    cook_time: '',
    servings: '',
    instructions: '',
    ingredients: '',
    tools: ''
  })

  const {recipe_img, recipe_name,description, prep_time, cook_time, servings, instructions, ingredients, tools} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const {recipe, isError, isSuccess, message} = useSelector((state) => state.recipe)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(!user) {
          navigate('/login')
        }

        if(isSuccess) {
            toast.success(message)
        }

        dispatch(reset())

    }, [user, recipe, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }))
  }

    const onSubmit = (e) => {
      e.preventDefault()

      const recipeData = {
          recipe_img,
          recipe_name,
          description,
          prep_time,
          cook_time,
          servings,
          instructions,
          ingredients,
          tools
      }

      dispatch(createRecipe(recipeData))
  }

  return (
    <div className='bg-gray-900 relative flex'>
        <SideNav />
        <div className="w-full ml-56">
            <div className="flex justify-between p-3">
                <div className="text-4xl font-bold text-yellow-500">Create Recipe</div>
                <div className="logo">
                    <img src="/logo 3.png" alt="Yummy" className="" width={172} height={70}/>
                </div> 
            </div>
            <form className="mx-7" onSubmit={onSubmit}>
            <section >
                <input type="file"  placeholder="Upload image here" className="pb-4" id='recipe_img' name='recipe_img' value={recipe_img} onChange={onChange}/>
                <article >
                  <input type="text" placeholder="Recipe name" className="mb-2 rounded-lg placeholder:text-center" id='recipe_name' name='recipe_name' value={recipe_name} onChange={onChange}/>
                  <textarea  cols="150" rows="10" placeholder="Description" className="rounded-lg" id='description' name='description' value={description} onChange={onChange}></textarea>
                  <div className="flex justify-between">
                    <article className="text-yellow-500">
                      <FaClock />
                      <h5 className="text-lg">prep time</h5>
                      <input type="number" className="rounded-lg" id='prep_time' name='prep_time' value={prep_time} onChange={onChange}/>
                    </article>
                    <article className="text-yellow-500">
                      <FaClock />
                      <h5 className="text-lg">cook time</h5>
                      <input type="number" className="rounded-lg" id='cook_time' name='cook_time' value={cook_time} onChange={onChange}/>
                    </article>
                    <article className="text-yellow-500">
                      <FaUser />
                      <h5 className="text-lg">serving</h5>
                      <input type='number' className="rounded-lg" id='servings' name='servings' value={servings} onChange={onChange}/>
                    </article>
                  </div>
                </article>
              </section>
              {/* <!-- content --> */}
        <section className="recipe-content">
        <article className="second-column">
              <h4 className="text-yellow-500 text-lg">Instructions</h4>
              <textarea cols="100" rows="15" className="rounded-lg" id='instructions' name='instructions' value={instructions} onChange={onChange}></textarea>
              <div>
                <h4 className="text-yellow-500 text-lg">Ingredients</h4>
                <textarea  cols="70" rows="10" className="rounded-lg" id='ingredients' name='ingredients' value={ingredients} onChange={onChange}></textarea>
              </div>
              <div>
                <h4 className="text-yellow-500 text-lg">Tools</h4>
                <textarea  cols="70" rows="10" className="rounded-lg" id='tools' name='tools' value={tools} onChange={onChange}></textarea>
              </div>
              <button type='submit' className="px-4 py-2 rounded-md bg-yellow-500 font-semibold">Submit</button>
            </article>
          </section>
        </form>
        </div>
    </div>
  )
}

export default CreateRecipe