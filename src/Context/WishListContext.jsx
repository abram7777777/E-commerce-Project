import axios from "axios";
import { createContext , useEffect, useState} from "react";

export const WishListContext = createContext()
const headers = {token : localStorage.getItem("token")}

export default function WishListContextProvider({children}){
    const [numWishItems, setNumWishItems] = useState(0)



    function addToWishList(id){
        return axios.post("https://ecommerce.routemisr.com/api/v1/wishlist" , {
            productId : id
        },{headers} ).then((res)=>res.data).catch((err)=>err)
    }

    function getLoggedWishList(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist" , {headers}).then((res)=>res.data).catch((err)=>err)
    }

    function removeWishItem(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {headers}).then((res)=>res.data).catch((err)=>err)
    }

    async function getWishData(){
        const data = await getLoggedWishList()
        setNumWishItems(data.count);     
    }
    
    useEffect(() => {
        getWishData()
    }, [])
    

    return <WishListContext.Provider value={{addToWishList , getLoggedWishList , removeWishItem , numWishItems , setNumWishItems }}>{children}</WishListContext.Provider>
}
