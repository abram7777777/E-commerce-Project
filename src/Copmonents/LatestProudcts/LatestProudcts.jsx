import axios from 'axios'
import styles from './LatestProudcts.module.css'
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';

export default function LatestProudcts() {

  const [products, setProducts] = useState([])
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
  

  return (
    <div className='flex flex-wrap mx-20 mb-9'>
      {products.length > 0 ? products.map((product) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={product.id}>
      <ProductItem product = {product} addProduct = {addProduct}/>
      </div>)):<Loader/>}
    </div>
  )
}
