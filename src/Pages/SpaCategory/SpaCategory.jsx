import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../Copmonents/Loader/Loader'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import ComingSoon from '../ComingSoon/ComingSoon'

export default function SpaCategory() {

    const {categoryId} = useParams()
    const [category, setCategory] = useState({})
    const [products, setProducts] = useState([])
    const [spaCategory, setSpaCategory] = useState([])
    const {addToCart , setNumCartItems , setCartId} = useContext(CartContext)
    

    


    async function getSpaCategory() {
        await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`).then((res)=>{setCategory(res.data.data)}).catch((err)=>{err})
      }


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
          getSpaCategory()
        }, [])
        useEffect(() => {
            getProuducts()
        }, [])
 
        useEffect(() => {
          setSpaCategory(products.filter((product) => product.category?.name === category.name ))
        }, [category , products])


 


  return (
    <>
                      <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-24 group cursor-default my-11">
                         {category.name} Products
                    <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
                    </span>
                    </h2>
    {spaCategory.length > 0 ? <div className='flex flex-wrap mx-11'>
        {spaCategory.length > 0 ? spaCategory.map((scategory) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={scategory.id}>
            <div className='group inner rounded-tl-xl rounded-br-xl shadow-lg hover:scale-105 transition-all duration-500  overflow-hidden hover:border hover:border-green-500 hover:bg-gray-100'>
            <Link to={`/productdetails/${scategory.id}`}>
      <div className=' overflow-hidden relative'>
      <img src={scategory.imageCover} className='w-full h-[250px] scale-110 hover:scale-125 transition-all duration-500' alt="" />
      <div className='absolute top-3 right-3  rounded-full bg-slate-100 p-2 hover:text-green-500 transition-all duration-500'><FaRegHeart /></div>
    </div>
    <div className='p-4 '>
    <small className='text-green-500 font-medium '>{scategory.category?.name}</small>
    <h5 className='text-2xl font-semibold text-gray-900 mb-3 line-clamp-1 '>{scategory.title }</h5>
    <div className='flex justify-between '>
      <p className='font-normal text-gray-600'>{scategory.price} EGP </p>
      <small className='font-normal text-[15px] text-gray-600 '><span className='inline-block text-yellow-300'><FaStar /></span>{scategory.ratingsAverage}</small>
    </div>
    </div>
      </Link>
                        <button onClick={()=>{addProduct(scategory.id)}} className='group-hover:translate-y-0 ms-8 mb-1 translate-y-20 w-[80%] bg-gradient-to-r from-green-300 to-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 rounded-full font-bold transition-all duration-700 py-3 '><IoCartOutline className='inline-block me-2 text-2xl' />Add to cart</button>
        </div>
                
    </div>)):<Loader/>}
    </div> : <ComingSoon/>  
    }
    </>
    )
}
