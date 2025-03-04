import { Helmet } from 'react-helmet'
import styles from './Brands.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from '../../Copmonents/Loader/Loader'
import { Link} from 'react-router-dom'

export default function Brands() {


  const [brand, setBrand] = useState([])

  async function getAllBrand() {
    await axios.get("https://ecommerce.routemisr.com/api/v1/brands").then((res)=>{
      setBrand(res.data.data)
    }).catch((err)=>{err})
  }

    useEffect(() => {
      getAllBrand()
    }, [])



  return (
    <>
                  <Helmet>
                <title>FreshCart-Brands</title>
                  </Helmet>


<div className="flex flex-col justify-center">
<h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-6 group cursor-default">
      Shop By Brands
<span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
</span>
</h2>
  <div className=" px-8 md:px-12 mx-auto py-12 lg:py-20 space-y-24 flex flex-col justify-center">
  <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10 h-full mx-auto">

      {brand.length > 0 ? brand.map((sbrand) => (
  <Link to={`/spabrand/${sbrand._id}`}  key={sbrand._id} className="block">
  <img src={sbrand.image} className="shadow-xl rounded-xl -rotate-12 hover:shadow-xl hover:z-10 relative hover:rotate-0 duration-500  h-full w-full object-cover hover:shadow-slate-600 hover:scale-110 sm:hover:scale-125 transform origin-bottom" alt={sbrand.name} />
  </Link>
      )):<Loader/>}
      </div>
</div>
</div>


    </>
  )
}
