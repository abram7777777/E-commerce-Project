import { Helmet } from 'react-helmet'
import styles from './Categories.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from '../../Copmonents/Loader/Loader'
import { Link} from 'react-router-dom'

export default function Categories() {


  const [categories, setCategories] = useState([])

  async function getAllCategories() {
    await axios.get("https://ecommerce.routemisr.com/api/v1/categories").then((res)=>{
      setCategories(res.data.data)
    }).catch((err)=>{err})
  }

    useEffect(() => {
      getAllCategories()
    }, [])


  return (
    <>
    
                  <Helmet>
                <title>FreshCart-Categories</title>
                  </Helmet>
                  <div className="flex flex-col justify-center">
                  <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-6 group cursor-default">
                    Shop By Category
                    <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
                    </span>
                    </h2>

                  
      <div className="grid p-5 sm:p-0 sm:py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:mx-20 ">
      {categories.length > 0 ? categories.map((category) => (
    <Link to={`/spacategory/${category._id}`}  key={category._id} className="rounded-lg relative group block overflow-hidden hover:shadow-lg hover:shadow-slate-600 transition-all duration-500" href="/Music/Products/6439d61c0049ad0b52b90051/category">
    <img className="group-hover:blur-sm shadow-md hover:shadow-lg transition duration-300 ease-in-out h-full w-full object-cover" src={category.image} alt={category.name} />
    <div className="absolute top-0 -left-full group-hover:left-0 opacity-0  group-hover:opacity-100 transition-all duration-500 w-full h-full bg-black/50 flex items-center justify-center">
    <h1 className="text-green-300 text-2xl font-bold">{category.name}</h1>
    </div>
    </Link>
      )):<Loader/>}
      </div>
      </div>   

    </>
  )
}
