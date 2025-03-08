import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import styles from './ProductItem.module.css'
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';

export default function ProductItem(props) {

const {product , addProduct , addWish , wishProductsClicked ,toggleWishListProducts } = props;



  return (
    <div className='relative bg-gray-50 group inner rounded-tl-xl rounded-br-xl shadow-lg hover:scale-105 transition-all duration-500  overflow-hidden hover:border hover:border-green-500 hover:bg-gray-100'>
            <button onClick={()=>{
              toggleWishListProducts(product.id)
              addWish(product.id)} }   className='absolute right-3 top-3 z-10 w-10 h-10 font-bold text-2xl   rounded-full bg-slate-100 p-2 border-2 border-gray-300 text-gray-300 hover:text-green-500 hover:border-green-500 transition-all duration-500'>{wishProductsClicked.includes(product.id) ? <FaHeart className='text-red-500' /> : <FaRegHeart />}</button>
      <Link to={`/ProductDetails/${product.id}`}>
      <div className=' overflow-hidden'>
      <img src={product.imageCover} className='w-full h-[250px] scale-110 hover:scale-125 transition-all duration-500' alt={product.title} />
    </div>
    <div className='p-4 '>
    <small className='text-green-500 font-medium '>{product.category?.name}</small>
    <h5 className='text-2xl font-semibold text-gray-900 mb-3 line-clamp-1 '>{product.title }</h5>
    <div className='flex justify-between '>
      <p className='font-normal text-gray-600'>{product.price} EGP </p>
      <small className='font-normal text-[15px] text-gray-600 '><span className='inline-block text-yellow-300'><FaStar /></span>{product.ratingsAverage}</small>
    </div>
    </div>
      </Link>
                  <button onClick={()=>{addProduct(product.id)}} className='group-hover:translate-y-0 ms-8 mb-1 translate-y-20 w-[80%] bg-gradient-to-r from-green-300 to-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 rounded-full font-bold transition-all duration-700 py-3 '><IoCartOutline className='inline-block me-2 text-2xl' />Add to cart</button>
  </div>
  )
}
