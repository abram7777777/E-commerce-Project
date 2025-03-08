import axios from 'axios'
import styles from './LatestProudcts.module.css'
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';
import { WishListContext } from '../../Context/WishListContext';

export default function LatestProudcts() {

  const [products, setProducts] = useState([])
  const [wishProductsClicked, setWishProductsClicked] = useState([])
  const {addToCart , setNumCartItems , setCartId} = useContext(CartContext)
  const {addToWishList , setNumWishItems , getLoggedWishList , removeWishItem} = useContext(WishListContext)

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
    getWishListProducts()
  }, [])

  useEffect(() => {
    getWishListProducts()
  }, [wishProductsClicked])
  
  

  return (
    <div className='flex flex-wrap mx-9 mb-9'>
      {products.length > 0 ? products.map((product) => (<div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' key={product.id}>
      <ProductItem product = {product} addProduct = {addProduct} wishProductsClicked={wishProductsClicked} toggleWishListProducts={toggleWishListProducts} />
      </div>)):<Loader/>}
    </div>
  )
}
