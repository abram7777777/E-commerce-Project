import { FaRegHeart, FaStar } from 'react-icons/fa';
import styles from './ProductItem.module.css'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {

const {product} = props;


  return (
    <div className='inner rounded-tl-xl rounded-br-xl shadow-lg hover:scale-105 transition-all duration-500  overflow-hidden hover:border hover:border-green-500 hover:bg-gray-100'>
      <Link to={`/ProductDetails/${product.id}`}>
      <div className=' overflow-hidden relative'>
      <img src={product.imageCover} className='w-full h-[250px] scale-110 hover:scale-125 transition-all duration-500' alt="" />
      <div className='absolute top-3 right-3  rounded-full bg-slate-100 p-2 hover:text-green-500 transition-all duration-500'><FaRegHeart /></div>
    </div>
    <div className='p-4 '>
    <small className='text-green-500 font-medium '>{product.category?.name}</small>
    <h5 className='text-2xl font-semibold text-gray-900 mb-3 '>{product.title.split(" ").slice(0,2).join(" ") }</h5>
    <div className='flex justify-between '>
      <p className='font-normal text-gray-600'>{product.price} EGP </p>
      <small className='font-normal text-[15px] text-gray-600 '><span className='inline-block text-yellow-300'><FaStar /></span>{product.ratingsAverage}</small>
    </div>
    </div>
      </Link>
  </div>
  )
}
