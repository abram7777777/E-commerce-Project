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

export default function SpaCategory() {

  const { categoryId } = useParams()
  const [category, setCategory] = useState({})
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoding] = useState(false)
  const [wishProductsClicked, setWishProductsClicked] = useState([])
  const { addToCart, setNumCartItems, setCartId } = useContext(CartContext)
  const [spaCategory, setSpaCategory] = useState([])
  const [callback, setCallback] = useState("category")
  const {addToWishList , setNumWishItems , getLoggedWishList , removeWishItem} = useContext(WishListContext)






  async function getSpaCategory() {
    await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`).then((res) => { setCategory(res.data.data) }).catch((err) => { err })
  }


  async function getProuducts() {
    setIsLoding(true)
    await axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
      setProducts(res.data.data)
      setIsLoding(false)
    }).catch((err) => { 
      err
      setIsLoding(false)})
  }

  async function addProduct(id) {
    let res = await addToCart(id)
    if (res.status === "success") {
      toast.success(res.message)
      setNumCartItems(res.numOfCartItems);
      setCartId(res.cartId);
    } else {
      toast.error("Something Wrong")
    }
  }

  async function getWishListProducts(){
    const data = await getLoggedWishList()
    const wishProducts = data?.data.map(product => product._id)
    setWishProductsClicked(wishProducts)
        
  }

  async function toggleWishListProducts(id){
    if(wishProductsClicked.includes(id)){
      const data = await removeWishItem(id)
      setWishProductsClicked(data.data)
      toast.error(data.message) 
      setNumWishItems((data.data?.length));       
    }else{
      const data = await addToWishList(id)
      setWishProductsClicked(data.data)
      toast.success(data.message)
      setNumWishItems((data.data?.length));       
    }
  }


  useEffect(() => {
    getProuducts()
    getSpaCategory()
    getWishListProducts()
  }, [])

  useEffect(() => {
    getWishListProducts()
  }, [wishProductsClicked])
  

  useEffect(() => {
    setSpaCategory(products.filter((product) => product.category?.name === category.name))
  }, [category, products])





  return (
    <>
      <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-16 pt-6 group cursor-default my-11">
        {category.name} Products
        <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
        </span>
      </h2>
      
      {isLoading ? <Loader /> : spaCategory.length === 0 ? <ComingSoon callback={callback} /> : <div className='flex flex-wrap mx-11 pb-7'>  { spaCategory.map((scategory) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={scategory.id}>
          <ProductItem product={scategory} addProduct={addProduct} wishProductsClicked={wishProductsClicked} toggleWishListProducts={toggleWishListProducts} />
        </div>)) } </div>
      }

    </>
  )
}
