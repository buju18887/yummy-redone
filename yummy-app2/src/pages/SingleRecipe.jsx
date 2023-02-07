import SideNav from "../components/SideNav"
import { reset } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SingleRecipe = () => {
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
    </div>
  )
}

export default SingleRecipe