import styles from './Footer.module.css'
import amazonLogo from "../../assets/amazon-pay.png"
import americanExpressLogo from "../../assets/american-express.png"
import masterCardLogo from "../../assets/logo.png"
import paypalLogo from "../../assets/paypal.png"
import appStore from "../../assets/app-store.png"
import googleStore from "../../assets/google-store.png"


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
      <div className='lg:flex border-b-2 items-center justify-between px-5 my-11 mt-7 lg:mt-0 '>
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
      </div>
    </footer>
  )
}
