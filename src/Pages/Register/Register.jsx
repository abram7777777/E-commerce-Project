import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

export default function Register() {

  const [errorMsg , useErorrMsg ] = useState(null)
  const [isloading , useIsLoading ] = useState(false)
  const navigate = useNavigate()

  const initialValues = {
    name : "",
    email : "",
    password : "",
    rePassword : "",
    phone : ""
  }

  const validationSchema = Yup.object({
    name : Yup.string().required().max(30).min(3),
    email : Yup.string().required().email(),
    password : Yup.string().required().matches(/^[A-Za-z1-9]{8,12}$/ , "Password Is Not Valid"),
    rePassword : Yup.string().required().oneOf([Yup.ref("password")] , "rePassword Dosn't Match Password"),
    phone : Yup.string().required().matches(/^01[0125][0-9]{8}$/ , "Phone Is Not Valid")

  })

  async function handleRegister(data){
    useIsLoading(true)
    await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , data).then((response)=>{
      useErorrMsg(null)
      useIsLoading(false)
      navigate("/login")
    }).catch((error)=>{
      useErorrMsg(error.response.data.message)
      useIsLoading(false)
    })
  }
 

  const formik = useFormik({
    initialValues ,
    validationSchema,
    onSubmit : handleRegister


  });



  return (

    <section className=' w-3/4 mx-auto  p-4 mt-16'>
                  <Helmet>
                <title>FreshCart-Home</title>
                  </Helmet>
<h1 className='text-3xl font-bold my-5 text-gray-900'>Register Now :</h1>
{errorMsg && <div className='bg-red-500 p-3 rounded-md my-2'>{errorMsg}</div>}
<form className="" onSubmit={formik.handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name" className="block  text-sm font-medium text-gray-600 ">Name :</label>
    <input type="text" id="name" name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg  border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Name" required />
    {(formik.touched.name && formik.errors.name) && (<small className='text-red-500'>{formik.errors.name}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block text-sm font-medium text-gray-600 ">Email :</label>
    <input type="email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Email" required />
    {(formik.touched.email && formik.errors.email) && (<small className='text-red-500'>{formik.errors.email}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block text-sm font-medium text-gray-600 ">Password :</label>
    <input type="password" id="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Password" required />
    {(formik.touched.password && formik.errors.password) && (<small className='text-red-500'>{formik.errors.password}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="repassword" className="block text-sm font-medium text-gray-600 ">rePassword :</label>
    <input type="password" id="repassword" name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your rePassword" required />
    {(formik.touched.rePassword && formik.errors.rePassword) && (<small className='text-red-500'>{formik.errors.rePassword}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="phone"className="block text-sm font-medium text-gray-600 ">Phone :</label>
    <input type="tel" id="phone" name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Phone" required />
    {(formik.touched.phone && formik.errors.phone) && (<small className='text-red-500'>{formik.errors.phone}</small>)}
  </div>
{isloading ? (<button type="button" disabled className="disabled:bg-green-300 text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11">loading ...</button>
):(<button type="submit" disabled={!formik.isValid} className="disabled:bg-green-300 text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11 transition-all duration-300">Register</button>
)}
<small className='ml-1'>Already you have an account <Link to={"/login"} rel="stylesheet" className='underline hover:text-green-500'>Login </Link> </small>
</form>

    </section>

  )
}

