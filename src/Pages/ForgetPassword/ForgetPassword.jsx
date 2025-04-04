import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useContext, useState } from 'react'
import { TokenContext } from '../../Context/TokenContext'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet'

export default function ForgetPassword() {

    const [errorMsg , useErorrMsg ] = useState(null)
    const [isloading , useIsLoading ] = useState(false)

  
    const initialValues = {
      email : "" 
    }
  
    const validationSchema = Yup.object({
      email : Yup.string().required().email(),  
    })
  
    async function handleLogin(data){
        useIsLoading(true)
      await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" , data).then((response)=>{
        useErorrMsg(null)
        useIsLoading(false)
        console.log(response.data);
            toast.success(response.data.message)
         
      }).catch((error)=>{
        useErorrMsg(error.response.data.message)
        useIsLoading(false)
        toast.error("Something Wrong")
      })
    }
   
  
    const formik = useFormik({
      initialValues ,
      validationSchema,
      onSubmit : handleLogin
  
  
    });
  
  

  return (
    <div className=' w-3/4 mx-auto  p-4 mt-16'>
            <Helmet>
        <title>FreshCart-ForgetPassword</title>
      </Helmet>
        <h2 class="text-3xl relative w-fit font-extrabold text-gray-800 group cursor-default mb-5">
            Forget Password :
            <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
            </span>
        </h2>
        {errorMsg && <div className='bg-red-500 p-3 rounded-md my-2'>{errorMsg}</div>}
<form className="" onSubmit={formik.handleSubmit}>

  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email :</label>
    <input type="email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Email" required />
    {(formik.touched.email && formik.errors.email) && (<small className='text-red-500'>{formik.errors.email}</small>)}
  </div>
  {isloading ? (<button type="button" disabled className="disabled:bg-green-300  text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11">loading ...</button>
):(<button type="submit" disabled={!formik.isValid} className="disabled:bg-green-300  text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11 transition-all duration-300">Send Code </button>
)}
    <Link to={"/verifycode"} className='ms-2  font-light hover:text-green-500 underline'>Verify Reset Code </Link>
    </form>
    </div>
  )
}
