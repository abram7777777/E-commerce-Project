import React, { useContext, useEffect, useState } from 'react'
import { WishListContext } from '../../Context/WishListContext'
import Loader from '../../Copmonents/Loader/Loader'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet'

export default function WishList() {

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const {getLoggedWishList , removeWishItem , setNumWishItems} = useContext(WishListContext)
    const [wishListData, setWishListData] = useState(null)
    const {addToCart , setNumCartItems , setCartId} = useContext(CartContext)
    
  



  async function getData() {
    let data = await getLoggedWishList()
    setWishListData(data.data)
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

  async function deleteItem(id) {
    let data = await removeWishItem(id)
    if(data.status === "success"){
        toast.error(data.message) 
        setNumWishItems((data.data?.length));        
    }else{
        toast.error("Something Wrong")
      }

  }


    useEffect(() => {
      getData()
    }, [])
    useEffect(() => {
      getData()
    }, [wishListData])






  return (
    
    <div className='mx-16 pt-1 pb-7'>
            <Helmet>
        <title>FreshCart-Wishlist</title>
      </Helmet>
                <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold text-gray-800 mt-6 group cursor-default my-11">
                Your Wishlist
            <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
            </span>
        </h2>
          {wishListData ? <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {wishListData?.length > 0 ? wishListData.map((product) => (
                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.title}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price}EGp
                  </td>
                  <td className="px-6 py-4">
                                      <button onClick={()=>{addProduct(product.id)}} className='me-9 mb-1 w-full bg-gradient-to-r from-green-300 to-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 rounded-full font-bold transition-all duration-700 py-2 '><IoCartOutline className='inline-block me-2 text-2xl' />Add to cart</button>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => { deleteItem(product.id) }}><FaTrashAlt className='text-red-600 text-2xl' /></button>
                  </td>
                </tr>)) :
                <>
                  <div className='p-5  flex justify-between items-center w-full '><p>No Products Yet ...</p> <Link to={"/products"} className='underline hover:text-green-400 text-green-500'>All Products</Link></div>
                </>}
            </tbody>
          </table>
        </div>
        </> : <Loader />}
    </div>
  )
}
