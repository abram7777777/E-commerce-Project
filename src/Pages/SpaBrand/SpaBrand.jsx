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
import ProductItem from '../../Copmonents/ProductItem/ProductItem'
import { WishListContext } from '../../Context/WishListContext'

export default function SpaBrand() {

    const {brandId} = useParams()
    const [brand, setBrand] = useState({})
    const [products, setProducts] = useState([])
    const [spabrand, setSpaBrand] = useState([])
    const {addToCart , setNumCartItems , setCartId} = useContext(CartContext) 
      const {addToWishList , setNumWishItems} = useContext(WishListContext)
       

    


    async function getSpaBrand() {
        await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`).then((res)=>{setBrand(res.data.data)}).catch((err)=>{err})
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

      async function addWish(id) {
        let res = await addToWishList(id)
        if(res.status === "success"){
          toast.success(res.message) 
          setNumWishItems((res.data?.length));       
        }else{
          toast.error("Something Wrong")
        }
      }
    


        useEffect(() => {
          getSpaBrand()
        }, [])
        useEffect(() => {
            getProuducts()
        }, [])
 
        useEffect(() => {
          setSpaBrand(products.filter((product) => product.brand?.name === brand.name ))
        }, [brand , products])


 


  return (
    <>
                      <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-24 group cursor-default my-11">
                         {brand.name} Products
                    <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
                    </span>
                    </h2>
    {spabrand.length > 0 ? <div className='flex flex-wrap mx-11 mb-7'>
      {spabrand.length > 0 ? spabrand.map((sbrand) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={sbrand.id}>
      <ProductItem product = {sbrand} addProduct = {addProduct} addWish = {addWish}/>
      </div>)):<Loader/>}
    </div> : <ComingSoon/>  
    }
    </>
    )
}