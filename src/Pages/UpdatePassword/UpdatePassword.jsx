import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useContext, useState } from 'react'
import { TokenContext } from '../../Context/TokenContext'
import { Helmet } from 'react-helmet'


export default function UpdatePassword() {
    const [errorMsg , useErorrMsg ] = useState(null)
    const [isloading , useIsLoading ] = useState(false)
    const navigate = useNavigate()
    const headers = {token : localStorage.getItem("token")}
  
    const initialValues = {
        currentPassword : "",
      password : "",
      rePassword : ""
    }
  
    const validationSchema = Yup.object({
        currentPassword : Yup.string().required().matches(/^[A-Za-z1-9]{8,12}$/ , "Password Is Not Valid"),
      password : Yup.string().required().matches(/^[A-Za-z1-9]{8,12}$/ , "Password Is Not Valid"),
      rePassword :Yup.string().required().oneOf([Yup.ref("password")] , "rePassword Dosn't Match Password")
  
    })
  
    async function handleLogin(data){
      useIsLoading(true)
      await axios.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword" , {headers} , {data}).then((response)=>{
        useErorrMsg(null)
        useIsLoading(false)
        console.log(response);
    }).catch((error)=>{
        useErorrMsg(error.response.message)
        console.log(error);
        
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
                  <title>FreshCart-UpdatePassword</title>
                    </Helmet>
          <h2 class="text-3xl relative w-fit font-extrabold text-gray-800 group cursor-default mb-5">
              Update Password :
              <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
              </span>
          </h2>{errorMsg && <div className='bg-red-500 p-3 rounded-md my-2'>{errorMsg}</div>}
  <form className="" onSubmit={formik.handleSubmit}>
  
    <div className="mb-5">
      <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-600 ">CurrentPassword :</label>
      <input type="password" id="currentPassword" name='currentPassword' value={formik.values.currentPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your CurrentPassword" required />
      {(formik.touched.currentPassword && formik.errors.currentPassword) && (<small className='text-red-500'>{formik.errors.currentPassword}</small>)}
    </div>
    <div className="mb-5">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600 ">Password :</label>
      <input type="password" id="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Password" required />
      {(formik.touched.password && formik.errors.password) && (<small className='text-red-500'>{formik.errors.password}</small>)}
    </div>
    <div className="mb-5">
      <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-600 ">rePassword :</label>
      <input type="password" id="rePassword" name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your rePassword" required />
      {(formik.touched.rePassword && formik.errors.rePassword) && (<small className='text-red-500'>{formik.errors.rePassword}</small>)}
    </div>
  
  {isloading ? (<button type="button" disabled className="disabled:bg-green-300  text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11">loading ...</button>
  ):(<button onClick={()=>{navigate("/resetpassword")}} type="submit" disabled={!formik.isValid} className="disabled:bg-green-300  text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-11 transition-all duration-300">Reset Password</button>
  )}
  </form>
  
      </section>
  
    )
}
