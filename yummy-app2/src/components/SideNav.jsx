import {FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSearch, FaSignOutAlt, FaTwitter, } from 'react-icons/fa'
import { logout, reset } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SideNav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
     <div className="fixed h-full w-56 bg-yellow-500 ">
            <img src="/pfp.png" alt="Profile" className='mx-auto mt-6' width={80} height={80}/>
            <h4 className='font-semibold text-xl text-gray-600 text-center my-5'>{user && user.name}</h4>
            <ul>
                <li className=' border-b border-t border-yellow-500 p-3 hover:bg-yellow-600'><a href="/dashboard" className='flex text-lg items-center'><FaHouseUser /> Home</a></li>
                <li className=' border-b border-t border-yellow-500 p-3 hover:bg-yellow-600'><a href="/myrecipes" className='flex text-lg items-center'><FaCookie /> My Recipes</a></li>
                <li className=' border-b border-t border-yellow-500 p-3 hover:bg-yellow-600'><a href="/likedrecipes" className='flex text-lg items-center'><FaHeart /> Liked Recipes</a></li>
                <li className=' border-b border-t border-yellow-500 p-3 hover:bg-yellow-600'><a href="/createrecipe" className='flex text-lg items-center'><FaPlus /> Create Recipe</a></li>
                <li className=' border-b border-t border-yellow-500 p-3 hover:bg-yellow-600'><a href="/drinks" className='flex text-lg items-center'><FaCocktail /> Drinks</a></li>
                <li className=' border-b border-t border-yellow-500 p-3 hover:bg-yellow-600'><a href="" className='flex text-lg items-center' onClick={onLogout}><FaSignOutAlt /> Logout</a></li>
            </ul>
            <div className="flex justify-evenly mt-48">
                <a href=""><FaFacebook /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaInstagram /></a>
            </div>
        </div>
    </>
  )
}

export default SideNav