import axios from "axios";
import { createContext , useEffect, useState} from "react";

export const CartContext = createContext()
const headers = {token : localStorage.getItem("token")}


function addToCart(id){
    return axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {
        productId : id
    },{headers} ).then((res)=>res.data).catch((err)=>err)
}

function getLoggedCartData(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {headers}).then((res)=>res.data).catch((err)=>err)
}

function removeCartItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {headers}).then((res)=>res.data).catch((err)=>err)
}

function clearCartItem(){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers}).then((res)=>res.data).catch((err)=>err)
}

function updateProdutQuantity(productId ,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {count:count} , {headers}).then((res)=>res.data).catch((err)=>err)
}




export default function CartContextProvider({children}){

    const [numCartItems, setNumCartItems] = useState(0)
    const [cartId, setCartId] = useState(null)

function cash(data){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , data , {headers}).then((res)=>res).catch((err)=>err)
}    

function online(data){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173` , data , {headers}).then((res)=>res.data).catch((err)=>err)
}

async function getCartData(){
    const data = await getLoggedCartData()
    setNumCartItems(data.numOfCartItems);
    setCartId(data.cartId);    
    
}

useEffect(() => {
    getCartData()
}, [])


    return <CartContext.Provider value={{addToCart , getLoggedCartData , removeCartItem , updateProdutQuantity , numCartItems , setNumCartItems , setCartId , clearCartItem , cartId , cash , online}}>{children}</CartContext.Provider>
}