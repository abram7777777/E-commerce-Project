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
import ProductItem from '../ProductItem/ProductItem'
import { WishListContext } from '../../Context/WishListContext'

export default function Electronics() {

    const [products, setProducts] = useState([])
    const [electronics, setElectronics] = useState([])
    const {addToCart , setNumCartItems , setCartId} = useContext(CartContext)
      const {addToWishList , setNumWishItems} = useContext(WishListContext)
    
    
    
    

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
                  getProuducts()
              }, [])

              useEffect(() => {
                setElectronics(products.filter((product) => product.category?.name === "Electronics" ))
              }, [products])

  return (
    <>
        <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-24 group cursor-default my-11">
            Electronics Products
            <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-10 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
            </span>
        </h2>


<div className='flex flex-wrap mx-5 justify-center mb-16'>
      {electronics.length > 0 ? electronics.map((electronic) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={electronic.id}>
      <ProductItem product = {electronic} addProduct = {addProduct} addWish = {addWish}/>
      </div>)):<Loader/>}

</div>
    </>
  )
}
