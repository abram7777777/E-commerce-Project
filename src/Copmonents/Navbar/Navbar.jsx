import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useContext } from 'react'
import { TokenContext } from '../../Context/TokenContext'
import imgeLogo from "../../assets/freshcart-logo.svg"
import { FaFacebook, FaInstagram, FaLinkedin, FaRegHeart, FaTiktok, FaYoutube } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { use } from 'react'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext'

export default function Navbar() {


  const {token , setToken} = useContext(TokenContext)
  const {numCartItems} = useContext(CartContext)
  const {numWishItems} = useContext(WishListContext)
  const navigate = useNavigate()
  function logoutUser(){
    localStorage.removeItem("token")
    setToken(null)
    navigate("/login")

  }

  return (
    <>

<nav className="bg-gray-100 fixed w-full z-20 top-0 start-0 ">
  <div className="flex flex-nowrap items-center justify-start mx-auto p-4 w-[full] lg:w-[95%] relative">
    <Link to="/" className="">
      <img src={imgeLogo} className="w-full" alt="FreshCart Logo" />
    </Link>

    {token && <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:ms-5 absolute translate-y-36 -translate-x-4 border-2 rounded-lg lg:rounded-none lg:border-0 lg:relative lg:translate-y-0" id="navbar-sticky">
      <ul className="flex flex-col  p-4  lg:p-0  font-medium bg-gray-100 lg:space-x-5 rtl:space-x-reverse lg:flex-row lg:mt-0">
      <li>
          <NavLink to={"/"} className="block pb-2 lg:py-2 px-3 text-gray-500 font-normal hover:text-green-500 border-b-2 lg:border-0 text-center">Home</NavLink>
        </li>
        <li>
          <NavLink to={"products"} className="block py-2 px-3 text-gray-500 font-normal hover:text-green-500 border-b-2 lg:border-0 text-center">Products</NavLink>
        </li>
        <li>
          <NavLink to={"categories"} className="block py-2 px-3 text-gray-500 font-normal hover:text-green-500 border-b-2 lg:border-0 text-center">Categories</NavLink>
        </li>
        <li>
          <NavLink to={"brands"} className="block pt-2 lg:py-2 px-3 text-gray-500 font-normal hover:text-green-500 text-center">Brands</NavLink>
        </li>
      </ul>
    </div>} 

    <div className="flex ml-auto">
      <div className='flex items-center space-x-3'>
      <FaFacebook className='lg:flex hidden hover:text-green-500'/>
      <IoLogoTwitter className='lg:flex hidden hover:text-green-500'/>
      <FaInstagram className='lg:flex hidden hover:text-green-500'/>
      <FaTiktok className='lg:flex hidden hover:text-green-500'/>
      <FaLinkedin className='lg:flex hidden hover:text-green-500'/>
      <FaYoutube className='lg:flex hidden hover:text-green-500'/>
      {
        token && <><NavLink to={"cart"} className="relative" ><IoCartOutline className='text-3xl flex hover:text-green-500'/> <span className='absolute w-3 h-3 flex justify-center items-center rounded-full bg-green-300 p-2 -top-2 -right-2'>{numCartItems}</span></NavLink> <NavLink to={"/wishlist"}><FaRegHeart className='text-2xl flex hover:text-green-500' /><span className='absolute w-3 h-3 flex justify-center items-center rounded-full bg-green-300 p-2 lg:right-24 right-[133px] top-3'>{numWishItems}</span></NavLink></>
      }
      </div>

      {!token && <>
        <NavLink to={"login"} type="button" className="text-gray-500 px-4 py-2 text-center hover:text-green-500">Login</NavLink>
        <NavLink to={"register"} type="button" className="text-gray-500 px-4 py-2 text-center hover:text-green-500">Register</NavLink>
      </> } 
      {token && <button onClick={()=>{logoutUser()}} type="button" className="text-gray-500 px-4 py-2 text-center hover:text-green-500">SignOut</button>} 
      {token && <>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open mainu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      </>}  
    </div>
  </div>
</nav>



    </>
  )
}
