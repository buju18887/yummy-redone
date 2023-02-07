import {FaUser} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        age: '',
        country: '',
    })

    const {name, email, password, password2, age, country} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/login')
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

        if (password !== password2) {
            toast.error('Password do not match')
        } else {
            const userData = {
                name,
                email,
                password,
                age,
                country
            }

            dispatch(register(userData))
        }
    }

  return (
    <>
    <main className='bg-[url("/background.jpg")] bg-cover bg-no-repeat'>
        <div className='w-full mx-auto mt-0 text-center pt-3'>
        <section className=''>
        <h1 className='text-5xl flex justify-center text-yellow-500 font-bold mt-3 pt-3'>
          <FaUser /> Register  
        </h1>
        <p className='text-2xl text-yellow-300 mt-4'>Please create an account</p>
       </section>

       <section className='mt-5'>
        <form className='w-1/3 mx-auto' onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder='Enter your name' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='name' name='name' value={name} onChange={onChange}/>
            </div>
            <div>
                <input type="email" placeholder='Enter your email' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='email' name='email' value={email} onChange={onChange}/>
            </div>
            <div>
                <input type="password" placeholder='Enter password' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='password' name='password' value={password} onChange={onChange}/>
            </div>
            <div>
                <input type="password" placeholder='Confirm password' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='password2' name='password2' value={password2} onChange={onChange}/>
            </div>
            <div>
                <input type="number" placeholder='Enter age' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='age' name='age' value={age} onChange={onChange}/>
            </div>
            <div>
                <input type="text" placeholder='Enter your country' className='w-full p-10 border border-yellow-500 rounded-lg mb-3 h-3' id='country' name='country' value={country} onChange={onChange}/>
            </div>
            <div>
                <button className='w-full rounded-md bg-yellow-500 font-semibold h-8 mb-3' type='submit'>SignUp</button>
            </div>
        </form>
       </section>
        </div>
        </main>
    </>
  )
}

export default Signup