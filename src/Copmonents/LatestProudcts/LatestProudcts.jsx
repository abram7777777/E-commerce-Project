import axios from 'axios'
import styles from './LatestProudcts.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';

export default function LatestProudcts() {

  const [products, setProducts] = useState([])

  async function getProuducts() {
    await axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res)=>{
      setProducts(res.data.data)
    }).catch((err)=>{err})
  }

  useEffect(() => {
    getProuducts()
  }, [])
  

  return (
    <div className=' my-11'>
    <h4 className='font-medium text-3xl my-3 text-gray-800'>Latest Prouducts</h4>
    <div className='flex flex-wrap'>
      {products.length > 0 ? products.map((product) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={product.id}>
      <ProductItem product = {product}/>
      </div>)):<Loader/>}
    </div>
    </div>
  )
}
