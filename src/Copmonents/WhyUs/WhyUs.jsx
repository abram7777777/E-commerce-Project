import React from 'react'
import delivery from "../../assets/delivaryyy.png"
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function WhyUs() {
  return (
    <>
        <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold dark:text-slate-100 text-gray-800 mt-20 group cursor-default my-3">
    Why Us
    <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
    </span>
</h2>

<div className=" overflow-hidden px-5  lg:p-10 py-6 rounded-md relative 4xl:container mb-7">

<div className="grid md:grid-cols-2 items-center gap-16 md:min-h-[340px]">
    <div style={{opacity: 1, transform: 'none', willChange: 'auto'}}>
    <p className=" text-xl text-gray-900">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
<ul className="space-y-4 mt-8">
    <li className="flex items-center gap-3 text-gray-800 text-lg ">
    <IoCheckmarkCircle className='text-green-500' />    Fast Delivery
</li>
<li className="flex items-center gap-3 text-gray-800 text-lg ">
<IoCheckmarkCircle className='text-green-500' /> Data Export
</li>
<li className="flex items-center gap-3 text-gray-800 text-lg ">
<IoCheckmarkCircle className='text-green-500' /> Free Shiping
</li>
<li className="flex items-center gap-3 text-gray-800 text-lg ">
<IoCheckmarkCircle className='text-green-500' /> Best Quality
</li>
</ul>
</div>
<img src={delivery} className="w-full object-contain rounded-md" />
</div>
</div>
    </>
  )
}


// bg-gradient-to-tr from-slate-400 via-slate-200 to-slate-300 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-slate-800 dark:to-slate-900
