import {FaSearch} from 'react-icons/fa' 
import SideNav from '../components/SideNav'
import { reset } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
     if(isError) {
      console.log(message)
     }

     if(!user) {
      navigate('/login')
     }

     return () => {
      dispatch(reset())
     }
  })


  return (
    <div className='bg-gray-900 relative flex'>
        <SideNav />
        <div className="w-full ml-56">
            <div className="flex justify-between p-3">
                <div className="text-4xl font-bold text-yellow-500">Recipes</div>
                <div className="p-4">
                    <input type="search" placeholder="Search recipes here" className='w-96 h-7 rounded-md placeholder:text-center border border-yellow-500 placeholder:text-yellow-500'/>
                    <button className='bg-yellow-500 w-6 h-6 rounded-full items-center ml-5'><FaSearch className='mx-auto'/></button>
                </div>
                <div className="logo">
                    <img src="/logo 3.png" alt="Yummy" className="" width={172} height={70}/>
                </div> 
            </div>
            <div className="grid gap-y-2 gap-x-1 pb-3 pl-10 grid-cols-3">
                {/* <!-- single recipe --> */}
          <a href="#">
            <img
              src="/chicken.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>BBQ Chicken</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="#">
            <img
              src="/kebab.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Kebab & Pasta</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="#">
            <img
              src="/pesto.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Pesto</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="#">
            <img
              src="/recipe-3.jpeg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Vegetable soup</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="#">
            <img
              src="/tiktok sandwich.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Sandwich</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="#">
            <img
              src="/fruitbowl.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Fruit Bowl</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
          {/* <!-- single recipe --> */}
          <a href="#">
            <img
              src="/eggs.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Eggs</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
          {/* <!-- single recipe --> */}
          <a href="#">
            <img
              src="/pizza.jpg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Pizza</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
          {/* <!-- single recipe --> */}
          <a href="#">
            <img
              src="/recipe-2.jpeg"
              className="w-80 h-52 object-cover rounded-2xl"
              alt=""
            />
            <h5 className='text-lg text-yellow-500 font-semibold'>Greek Lamb</h5>
            <p className='text-yellow-200 text-opacity-40 font-thin'>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard