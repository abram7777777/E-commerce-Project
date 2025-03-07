import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function BrandSlider() {

  const [brand, setBrand] = useState([])

  async function getAllBrand() {
    await axios.get("https://ecommerce.routemisr.com/api/v1/brands").then((res)=>{
      setBrand(res.data.data)
    }).catch((err)=>{err})
  }

    useEffect(() => {
      getAllBrand()
    }, [])

    const settings = {
      dots: false,
      arrows :false ,
      infinite: true,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear" ,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div className="slider-container w-full my-24">
        <Slider  {...settings}>
        {brand.map((sbrand) => (<div key={sbrand._id} style={{width: '189.875px'}}>
    <Link to={`/spabrand/${sbrand._id}`} className="w-[150px] block" >
    <img src={sbrand.image} className="w-full rounded-md  brightness-50 hover:brightness-95 transition-all duration-300 cursor-pointer" alt={sbrand.name} />
</Link>
</div>))}
        </Slider>
      </div>
    );
  
  
}


{/* <div style={{width: '189.875px'}}>
    <a className="w-[150px] block" >
    <img src="https://ecommerce.routemisr.com/Route-Academy-brands/1678286730980.png" className="rounded-md  brightness-50 hover:brightness-100 transition-all duration-300 cursor-pointer" alt="" />
</a>
</div> */}