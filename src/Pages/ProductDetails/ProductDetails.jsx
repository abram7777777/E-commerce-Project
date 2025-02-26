import axios from 'axios'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import Slider from 'react-slick'
import { IoCartOutline } from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : false ,
 
};

export default function ProductDetails() {

const [details, setDetails] = useState({})
const {prouductId} = useParams()
const {addToCart , setNumCartItems , setCartId} = useContext(CartContext)

  async function getProductDetails() {
    await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${prouductId}`).then((res)=>{setDetails(res.data.data)}).catch((err)=>{err})
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
    getProductDetails()

  }, [])
  

  return (
    <div className='mt-28 mb-16'>
                  <Helmet>
                <title>{details.title}</title>
                  </Helmet>
      <div className='w-[85%] mx-auto flex flex-wrap'>
        <div className='w-full lg:w-1/3 py-5 rounded-xl shadow-lg border-green-100 border shadow-green-200 mb-11 lg:mb-0'>
        <Slider {...settings}>
          {details.images?.map((img , i)=>
            <img src={img} className='w-full mb-3 h-[470px]' key={i} alt="" />
          )}
          </Slider>


        </div>
        <div className='w-full lg:w-2/3 lg:ps-16'>
         <div>
         <h1 className='text-4xl font-bold text-gray-900'>{details.title}</h1>
          <p className='my-3 text-gray-500'>{details.description}</p>
            <p className='font-bold text-3xl text-green-500 my-5'>{details.price} EGP </p>
            <small className='font-normal text-[23px] text-gray-600 '><span className='inline-block text-yellow-300 me-1'><FaStar /></span>{details.ratingsAverage}</small>
          </div>

          <div className='flex my-5 border-b-2 pb-7'>
            <button onClick={()=>{addProduct(details.id)}} className='w-[90%] bg-gradient-to-r from-green-300 to-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 rounded-full font-bold transition-all duration-700 py-3 '><IoCartOutline className='inline-block me-2 text-2xl' />Add to cart</button>
            <div className='w-[50px] bg-green-500 rounded-full flex justify-center items-center ms-3 text-white text-2xl hover:text-green-500 hover:bg-white hover:border-green-500 hover:border-2 transition-all duration-300'><FaRegHeart /></div>
          </div>
          <p className='font-bold mb-5' >Category : <span className='font-normal text-gray-600 '>{details.category?.name}</span></p>
          <p className='font-bold mb-5'>Brand : <span className='font-normal text-gray-600 '>{details.brand?.name}</span></p>
          <p className='font-bold mb-5'>In Stock : <span className='font-normal text-gray-600 '>{details.quantity}</span></p>
        </div>
      </div>
    </div>
  )
}
