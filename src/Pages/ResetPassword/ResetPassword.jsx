import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useContext, useState } from 'react'
import { TokenContext } from '../../Context/TokenContext'
import { Helmet } from 'react-helmet'


export default function ResetPassword() {
    const [errorMsg , useErorrMsg ] = useState(null)
    const [isloading , useIsLoading ] = useState(false)
    const navigate = useNavigate()
    const {setToken} = useContext(TokenContext)
  
    const initialValues = {
      email : "",
      newPassword : ""
    }
  
    const validationSchema = Yup.object({
      email : Yup.string().required().email(),
      newPassword : Yup.string().required().matches(/^[A-Za-z1-9]{8,12}$/ , "Password Is Not Valid")
  
    })
  
    async function handleLogin(data){
      useIsLoading(true)
      await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , data).then((response)=>{
        setToken(response.token)
        localStorage.setItem("token" , response.token)
        useErorrMsg(null)
        useIsLoading(false)
        console.log(response);
    }).catch((error)=>{
        useErorrMsg(error.response.message)
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
                    <Helmet>
                  <title>FreshCart-ResetPassword</title>
                    </Helmet>

          <h2 class="text-3xl relative w-fit font-extrabold text-gray-800 group cursor-default mb-5">
              Reset Password :
              <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
              </span>
          </h2>
          {errorMsg && <div className='bg-red-500 p-3 rounded-md my-2'>{errorMsg}</div>}
  <form className="" onSubmit={formik.handleSubmit}>
  
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 ">Email :</label>
      <input type="email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Email" required />
      {(formik.touched.email && formik.errors.email) && (<small className='text-red-500'>{formik.errors.email}</small>)}
    </div>
    <div className="mb-5">
      <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-600 ">newPassword :</label>
      <input type="password" id="newPassword" name='newPassword' value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your newPassword" required />
      {(formik.touched.newPassword && formik.errors.newPassword) && (<small className='text-red-500'>{formik.errors.newPassword}</small>)}
    </div>
  
  {isloading ? (<button type="button" disabled className="disabled:bg-green-300  text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11">loading ...</button>
  ):(<button onClick={()=>{navigate("/login")}} type="submit" disabled={!formik.isValid} className="disabled:bg-green-300  text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11 transition-all duration-300">Login</button>
  )}
  </form>
  
      </section>
  
    )
}
