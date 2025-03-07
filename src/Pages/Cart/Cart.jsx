import { Helmet } from 'react-helmet'
import styles from './Cart.module.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import Loader from '../../Copmonents/Loader/Loader'
import { FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {

  const { getLoggedCartData, removeCartItem, updateProdutQuantity , setCartId , setNumCartItems ,clearCartItem } = useContext(CartContext)
  const [cartData, setCartData] = useState(null)
  const navigate = useNavigate()
  const [payment, setPayment] = useState("")

  async function getData() {
    let data = await getLoggedCartData()
    setCartData(data.data)
  }

  async function deleteItem(id) {
    let data = await removeCartItem(id)
    setCartData(data.data)
    setNumCartItems(data.numOfCartItems);
    setCartId(data.cartId);
  }
  
  async function clearAllItem() {
    let data = await clearCartItem()
    if(data = "success"){
      setCartData([])
      setNumCartItems(0);
    }
  }

  async function updateCount(id, count) {
    let data = await updateProdutQuantity(id, count)
    setCartData(data.data)
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='mt-16 pt-4 pb-7 w-[93%] mx-auto'>
      <Helmet>
        <title>FreshCart-Cart</title>
      </Helmet>


      {cartData ? <>
        <div className='flex justify-between'>
        <h2 class="text-4xl sm:text-5xl relative w-fit font-extrabold  text-gray-800 group cursor-default ">
                Shopping Cart
            <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
            </span>
        </h2>          <div className='flex items-center gap-36'>
          <h5>
            <span className='text-gray-900 font-bold'>Total Price : </span>
            {cartData.totalCartPrice ? cartData.totalCartPrice : "0"} EGP
          </h5>
          {cartData?.products?.length > 0 &&  <button onClick={()=>{clearAllItem(cartData.cartId)}} className=' text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg px-5 py-2.5  transition-all duration-300 '>Clear All Products</button>
        }
          </div>

        </div>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
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
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData?.products?.length > 0 ? cartData.products.map((product) => (
                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={product.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product?.title} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.product?.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button disabled={product.count === 1} onClick={() => { updateCount(product.product.id, product.count - 1) }} className="disabled:cursor-not-allowed inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <p>{product.count}</p>
                      </div>
                      <button onClick={() => { updateCount(product.product.id, product.count + 1) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price}EGp
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => { deleteItem(product.product?.id) }}><FaTrashAlt className='text-red-600 text-2xl' /></button>
                  </td>
                </tr>)) :
                <>
                  <div className='p-5 flex justify-between items-center w-full '><p>No Products Yet ...</p> <Link to={"/products"} className='underline hover:text-green-400 text-green-500'>All Products</Link></div>
                </>}
            </tbody>
          </table>
        </div>

        {
                cartData?.products?.length > 0 &&   <div className='flex-col flex gap-20'>
                  <select  name="payment" id="payment" onChange={(e)=>{setPayment(e.target.value)}} className=' bg-green-300 rounded-md p-3 text-center outline-none hover:bg-green-400 transition-all focus:bg-green-400'>
                    <option value="cach" className='bg-green-200'>cach</option>
                    <option value="online" className='bg-green-200'>online</option>
                  </select>
                  <button onClick={()=>{navigate("/checkout" , {state : payment})}} className=' text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg px-5 py-2.5  transition-all duration-300 '>CheckOut</button>
                  </div>
        }

        </> : <Loader />}


    </div>
  )
}
