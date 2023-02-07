import { useEffect, useState } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

  return (
    <>
     <main className='bg-[url("/background.jpg")] bg-cover bg-no-repeat pt-36 pb-56'>
        <div className='w-full mx-auto mt-0 text-center pt-0'>
        <section className=''>
        <h1 className='text-5xl flex justify-center text-yellow-500 font-bold mt-3 pt-3'>
          <FaSignInAlt /> Login  
        </h1>
        <p className='text-2xl text-yellow-300 mt-4'>Please login</p>
       </section>

       <section className='mt-5'>
        <form className='w-1/3 mx-auto' onSubmit={onSubmit}>
            <div>
                <input type="email" placeholder='Enter your email' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='email' name='email' value={email} onChange={onChange}/>
            </div>
            <div>
                <input type="password" placeholder='Enter password' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='password' name='password' value={password} onChange={onChange}/>
            </div>
            <div>
                <button className='w-full rounded-md bg-yellow-500 font-semibold h-8 mb-3' type='submit'>Login</button>
            </div>
        </form>
       </section>
        </div>
        </main>
    </>
  )
}

export default Login