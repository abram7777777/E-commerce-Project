import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function Electronics() {

    const [products, setProducts] = useState([])
    const [electronics, setElectronics] = useState([])
    const {addToCart , setNumCartItems , setCartId} = useContext(CartContext)
    
    
    

    async function getProuducts() {
        await axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res)=>{
          setProducts(res.data.data)
        }).catch((err)=>{err})
      }

      async function addProduct(id) {
        let res = await addToCart(id)
        if(res.status === "success"){
          toast.success(res.message)
          setNumCartItems(res.numOfCartItems);
          setCartId(res.cartId);
        }else{
          toast.error("Something Wrong")
        }
      }

              useEffect(() => {
                  getProuducts()
              }, [])

              useEffect(() => {
                setElectronics(products.filter((product) => product.category?.name === "Electronics" ))
              }, [products])

  return (
    <>
        <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-24 group cursor-default my-11">
            Electronics Products
            <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
            </span>
        </h2>


<div className='flex flex-wrap mx-3 justify-center mb-16'>
{electronics.length > 0 ? electronics.map((electronic) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={electronic.id}>
            <div className='group inner rounded-tl-xl rounded-br-xl shadow-lg hover:scale-105 transition-all duration-500  overflow-hidden hover:border hover:border-green-500 hover:bg-gray-100'>
            <Link to={`/productdetails/${electronic.id}`}>
      <div className=' overflow-hidden relative'>
      <img src={electronic.imageCover} className='w-full h-[250px] scale-110 hover:scale-125 transition-all duration-500' alt="" />
      <div className='absolute top-3 right-3  rounded-full bg-slate-100 p-2 hover:text-green-500 transition-all duration-500'><FaRegHeart /></div>
    </div>
    <div className='p-4 '>
    <small className='text-green-500 font-medium '>{electronic.category?.name}</small>
    <h5 className='text-2xl font-semibold text-gray-900 mb-3 line-clamp-1 '>{electronic.title }</h5>
    <div className='flex justify-between '>
      <p className='font-normal text-gray-600'>{electronic.price} EGP </p>
      <small className='font-normal text-[15px] text-gray-600 '><span className='inline-block text-yellow-300'><FaStar /></span>{electronic.ratingsAverage}</small>
    </div>
    </div>
      </Link>
                        <button onClick={()=>{addProduct(electronic.id)}} className='group-hover:translate-y-0 ms-8 mb-1 translate-y-20 w-[80%] bg-gradient-to-r from-green-300 to-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 rounded-full font-bold transition-all duration-700 py-3 '><IoCartOutline className='inline-block me-2 text-2xl' />Add to cart</button>
        </div>
                
    </div>)):<Loader/>}

</div>
    </>
  )
}
