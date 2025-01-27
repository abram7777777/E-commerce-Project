import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useContext, useState } from 'react'
import { TokenContext } from '../../Context/TokenContext'

export default function Login() {

  const [errorMsg , useErorrMsg ] = useState(null)
  const [isloading , useIsLoading ] = useState(false)
  const navigate = useNavigate()
  const {setToken} = useContext(TokenContext)

  const initialValues = {
    email : "",
    password : ""
  }

  const validationSchema = Yup.object({
    email : Yup.string().required().email(),
    password : Yup.string().required().matches(/^[A-Za-z1-9]{8,12}$/ , "Password Is Not Valid")

  })

  async function handleLogin(data){
    useIsLoading(true)
    await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , data).then((response)=>{
      setToken(response.data.token)
      localStorage.setItem("token" , response.data.token)
      useErorrMsg(null)
      useIsLoading(false)
      navigate("/")
    }).catch((error)=>{
      useErorrMsg(error.response.data.message)
      useIsLoading(false)
    })
  }
 

  const formik = useFormik({
    initialValues ,
    validationSchema,
    onSubmit : handleLogin


  });



  return (

    <section className=' w-3/4 mx-auto  p-4 mt-16'>
<h1 className='text-3xl font-bold my-3'>Register Now :</h1>
{errorMsg && <div className='bg-red-500 p-3 rounded-md my-2'>{errorMsg}</div>}
<form className="" onSubmit={formik.handleSubmit}>

  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
    <input type="email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
    {(formik.touched.email && formik.errors.email) && (<small className='text-red-500'>{formik.errors.email}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
    <input type="password" id="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" required />
    {(formik.touched.password && formik.errors.password) && (<small className='text-red-500'>{formik.errors.password}</small>)}
  </div>

{isloading ? (<button type="button" disabled className="disabled:bg-blue-300 my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">loading ...</button>
):(<button type="submit" disabled={!formik.isValid} className="disabled:bg-blue-300 my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
)}
<small className='ml-1'>Create an Account <Link to={"/register"} rel="stylesheet" className='underline hover:text-blue-500'>Register </Link> </small>
</form>

    </section>

  )
}

