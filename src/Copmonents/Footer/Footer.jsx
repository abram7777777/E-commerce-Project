import styles from './Footer.module.css'
import amazonLogo from "../../assets/amazon-pay.png"
import americanExpressLogo from "../../assets/american-express.png"
import masterCardLogo from "../../assets/logo.png"
import paypalLogo from "../../assets/paypal.png"
import appStore from "../../assets/app-store.png"
import googleStore from "../../assets/google-store.png"
import logo from "../../assets/freshcart-logo.svg"


export default function Footer() {
  return (
    <footer className=' font-bold bg-gray-100 '>
      <div className='w-[full] lg:w-[95%] p-4 pt-11 mx-auto'>
      <h6 className='text-3xl font-normal text-gray-800'>Get the FreshCart app</h6>
      <p className='font-normal text-gray-500 my-3 '>We will send you a link , open it on your phone to download the app. </p>
      <div className=' lg:flex  lg:gap-[2%] lg:justify-center border-b-2 pb-7'>
      <input type="email" id="email" className="outline-none rounded-lg border-b-2  focus:border-green-400 text-gray-700 text-sm block w-full lg:w-[79%] p-2.5" placeholder="Email .." required />
      <button type="button" className="w-full mt-5 lg:mt-0 lg:w-[15%] text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5  transition-all duration-300">Share App Link</button>
      </div>



<div className="md:flex flex flex-wrap justify-center items-center border-b-2 mt-9 pb-7 ">
  <div className='w-1/2 md:w-1/4 mb-5 md:mb-0'>
  <p className="font-bold text-gray-800">Quick Link</p>
<div className="flex flex-col items-start mt-5 space-y-2">
  <a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Home</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Who We Are</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Our Philosophy</a>
</div>
</div>
<div className='w-1/2 md:w-1/4 mb-5 md:mb-0'>
  <p className="font-bold text-gray-800">Industries</p>
<div className="flex flex-col items-start mt-5 space-y-2">
  <a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Retail &amp; E-Commerce</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Information Technology</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Finance &amp; Insurance</a>
</div>
</div>
<div className='w-1/2 md:w-1/4 mb-5 md:mb-0'>
  <p className="font-bold text-gray-800">Services</p>
<div className="flex flex-col items-start mt-5 space-y-2">
  <a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Translation</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Proofreading &amp; Editing</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">Content Creation</a>
</div>
</div>
<div className='w-1/2 md:w-1/4 mb-5 md:mb-0'>
  <p className="font-bold text-gray-800">Contact Us</p>
<div className="flex flex-col items-start mt-12 space-y-2">
  <a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">+880 768 473 4978</a>
<a href="#" className="text-gray-500 font-normal transition-colors duration-300 hover:underline hover:text-green-500">info@freshCart.com</a>
</div>
</div>
</div>



      <div className='lg:flex border-b-2 items-center justify-between px-5 mb-5 mt-7 lg:mt-0 '>
        <div className='flex gap-5 justify-center'>
        <p className='font-medium text-gray-700'>Payment Partners </p>
        <img src={amazonLogo} className='w-11 h-9' alt="amazonLogo" />
        <img src={americanExpressLogo} className='w-11 h-9' alt="americanExpressLogo" />
        <img src={masterCardLogo} className='w-11 h-9' alt="masterCardLogo" />
        <img src={paypalLogo} className='w-11 h-9' alt="paypalLogo" />
        </div>
        <div className='flex items-center justify-center '>
          <p className='font-medium text-gray-700 me-2'>Get deliveries with FreshCart</p>
          <img src={appStore} className='w-20 lg:w-28 h-6 lg:h-8' alt="appStore" />
          <img src={googleStore} className='w-20 lg:w-28' alt="googleStore" />
        </div>
      </div>


<div className="flex items-center justify-between lg:px-16 sm:flex-row mb-7">
  <a href="/">
  <img src={logo} className='w-3/4 mt-3' alt="" />
</a>
<p className="mt-4 text-sm font-normal text-gray-500 ">© Copyright 2025 All Rights Reserved.</p>
</div>


      </div>
    </footer>
  )
}
