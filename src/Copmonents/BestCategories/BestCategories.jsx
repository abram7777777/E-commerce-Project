import React from 'react'
import men from "../../assets/home1.jpg"
import menlogo from "../../assets/home2.png"
import women from "../../assets/women1.png"
import womenlogo from "../../assets/women2.png"
import { Link } from 'react-router-dom'

export default function BestCategories() {
  return (
<>

<h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-24 group cursor-default my-11">
            Best Categories 
            <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
            </span>
</h2>


<div className='grid lg:grid-cols-2 gap-14 justify-center items-center w-[75%] mx-auto'>
<div style={{opacity: 1, transform: 'none', willChange: 'auto'}}>
    <Link to={`/spacategory/${"6439d5b90049ad0b52b90048"}`}>
<div className="card group/card relative w-full">
<div className="wrapper text-center relative group-hover/card:brightness-50 group-hover/card:shadow-2xl group-hover/card:shadow-black drop-shadow-2xl group-hover/card:[transform:perspective(900px)translateY(-5%)rotateX(35deg)translateZ(0)] transition-all duration-500">
<img src={men} className="w-full " alt="Men's Fashion" />
</div>
<img src={menlogo} className="w-full opacity-0 group-hover/card:opacity-100 group-hover/card:-translate-y-11 transition-all duration-700 absolute inset-0" alt />
<span className="text-center block absolute left-0 right-0 mx-auto font-extrabold -bottom-0 group-hover/card:bottom-32 delay-200 text-green-300 p-3 rounded-lg bg-black/65 w-fit text-2xl md:text-3xl lg:text-4xl opacity-0 group-hover/card:opacity-100 transition-all duration-700 ">Men's Fashion</span>
</div>
</Link>
</div>
<div style={{opacity: 1, transform: 'none', willChange: 'auto'}}>
    <Link to={`/spacategory/${"6439d58a0049ad0b52b9003f"}`}>
<div className="card group/card relative w-full">
<div className="wrapper text-center relative group-hover/card:brightness-50 group-hover/card:shadow-2xl group-hover/card:shadow-black drop-shadow-2xl group-hover/card:[transform:perspective(900px)translateY(-5%)rotateX(35deg)translateZ(0)] transition-all duration-500">
<img src={women} className="w-full " alt="women's Fashion" />
</div>
<img src={womenlogo} className="w-full opacity-0 group-hover/card:opacity-100 group-hover/card:-translate-y-11 transition-all duration-700 absolute inset-0" alt />
<span className="text-center block absolute left-0 right-0 mx-auto font-extrabold -bottom-0 group-hover/card:bottom-32 delay-200 text-green-300 p-3 rounded-lg bg-black/65 w-fit text-2xl md:text-3xl lg:text-4xl opacity-0 group-hover/card:opacity-100 transition-all duration-700 ">Men's Fashion</span>
</div>
</Link>
</div>
    </div>
</>
  )
}
