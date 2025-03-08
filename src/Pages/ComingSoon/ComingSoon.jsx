import React, { useEffect } from 'react'
import comingsoon from "../../assets/pngtree-coming-soon-green-png-image_6863508.png"
import { IoArrowBackCircle, IoHome } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function ComingSoon({callback}) {

    const navigate = useNavigate()

    function toHome(){
        navigate("/")
    }
    function back(){
        callback === "category" ? navigate("/categories") : navigate("/brands") 
    }

    


  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-3xl'>Coming <span className='font-bold'>Soon</span></h2>
        <div className='w-1/4 '>
            <img className='w-full h-72' src={comingsoon} alt="comingsoon" />
        </div>
        <p className='font-semibold'>We are working hard to bring you something good. Stay tuned!</p>
        <div className='flex w-full justify-center my-9 gap-3'>
            <button onClick={()=>{back()}} className='flex justify-center gap-2  items-center w-full mt-5 lg:mt-0 lg:w-[15%] text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-3  transition-all duration-300'><IoArrowBackCircle />            Go Back</button>
            <button onClick={()=>{toHome()}} className='flex justify-center gap-2 items-center w-full mt-5 lg:mt-0 lg:w-[15%] text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-3  transition-all duration-300'><IoHome />            Home</button>
        </div>
    </div>
  )
}
