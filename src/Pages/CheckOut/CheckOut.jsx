import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CheckOut() {



  const navigate = useNavigate()
  const {cash , setNumCartItems , setCartId ,online} = useContext(CartContext)

  const {state} = useLocation()

    const initialValues = {
        details : "",
        phone : "",
        city : ""
      }

      const validationSchema = Yup.object({
        details : Yup.string().required(),
        phone : Yup.string().required(),
        city : Yup.string().required(),
      })


      async function handleSubmit(data){

        if(state === "online"){
          const res = await online({shippingAddress : data})
          if(res.status==="success"){
            window.location.href = res.session.url
          }
        }else{
          const res = await cash({shippingAddress : data})
          if(res.data.status){
            setCartId(null)
            setNumCartItems(0)
            navigate("/allorders")
          }
        }
     


   
      }

      const formik = useFormik({
        initialValues ,
        validationSchema,
        onSubmit : handleSubmit
    
    
      });

  return (
    <div className=' w-3/4 mx-auto  p-4 mt-16'>
        <h1 className='text-3xl font-bold my-5 text-gray-900'>CheckOut :</h1>
    <form className="" onSubmit={formik.handleSubmit}>
  <div className="mb-5">
    <label htmlFor="details" className="block  text-sm font-medium text-gray-600 ">Details :</label>
    <input type="text" id="details" name='details' value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg  border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Details" required />
    {(formik.touched.details && formik.errors.details) && (<small className='text-red-500'>{formik.errors.details}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block  text-sm font-medium text-gray-600 ">Phone :</label>
    <input type="text" id="phone" name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg  border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your Phone" required />
    {(formik.touched.phone && formik.errors.phone) && (<small className='text-red-500'>{formik.errors.phone}</small>)}
  </div>
  <div className="mb-5">
    <label htmlFor="city" className="block  text-sm font-medium text-gray-600 ">City :</label>
    <input type="text" id="city" name='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="outline-none rounded-lg  border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full p-2.5" placeholder="Enter Your City" required />
    {(formik.touched.city && formik.errors.city) && (<small className='text-red-500'>{formik.errors.city}</small>)}
  </div>
  <button type="submit" className='w-full text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg px-5 py-2.5  transition-all duration-300 '>Pay</button>
  </form> 
    </div>
    )
}
