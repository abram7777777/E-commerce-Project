import axios from 'axios'
import styles from './CategorySlider.module.css'
import { useEffect } from 'react'
import Slider from 'react-slick';
import { useState } from 'react';


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows : false ,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


export default function CategorySlider() {

  const [categories, setCategories] = useState([])


  async function getCategories() {
    await axios.get("https://ecommerce.routemisr.com/api/v1/categories").then((res)=>{
      setCategories(res.data.data);
      
    }).catch((error)=>{

    })
  }

  useEffect(() => {
    getCategories()
  }, [])
  

  return (
    <div className=' my-11'>
      <h3 className='font-medium text-3xl my-3 text-gray-800'>Shop Popular Categories</h3>
      <Slider {...settings}>
        {categories.map((category)=>(
          <div key={category._id}>
            <img src={category.image} className='w-full h-[350px]' alt={category.name} />
            <h4 className='font-semibold my-2 text-gray-900'>{category.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  )
}
