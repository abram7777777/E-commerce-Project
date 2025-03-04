import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Pages/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Products from './Pages/Products/Products'
import Categories from './Pages/Categories/Categories'
import Brands from './Pages/Brands/Brands'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import NotFound from './Pages/NotFound/NotFound'
import TokenContextProvider from './Context/TokenContext'
import ProtectedRouts from './Copmonents/ProtectedRouts/ProtectedRouts'
import { RiWifiOffLine } from 'react-icons/ri'
import { Offline } from 'react-detect-offline'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import CheckOut from './Pages/CheckOut/CheckOut'
import Allorders from './Pages/Allorders/Allorders'
import SpaCategory from './Pages/SpaCategory/SpaCategory'
import ComingSoon from './Pages/ComingSoon/ComingSoon'
import SpaBrand from './Pages/SpaBrand/SpaBrand'

export default function App() {

  const routes = createBrowserRouter([{
    path : "" , element : <MainLayout/>,
    children : [
      {index : true , element : <ProtectedRouts><Home/></ProtectedRouts>},
      {path : "cart" , element : <ProtectedRouts><Cart/></ProtectedRouts>},
      {path : "products" , element : <ProtectedRouts><Products/></ProtectedRouts>},
      {path : "categories" , element : <ProtectedRouts><Categories/></ProtectedRouts>},
      {path : "brands" , element : <ProtectedRouts><Brands/></ProtectedRouts>},
      {path : "checkout" , element : <ProtectedRouts><CheckOut/></ProtectedRouts>},
      {path : "allorders" , element : <ProtectedRouts><Allorders/></ProtectedRouts>},
      {path : "comingsoon" , element : <ProtectedRouts><ComingSoon/></ProtectedRouts>},
      {path : "login" , element : <Login/>},
      {path : "register" , element : <Register/>},
      {path : "productdetails/:prouductId" , element : <ProtectedRouts><ProductDetails/></ProtectedRouts>},
      {path : "spacategory/:categoryId" , element : <ProtectedRouts><SpaCategory/></ProtectedRouts>},
      {path : "spabrand/:brandId" , element : <ProtectedRouts><SpaBrand/></ProtectedRouts>},
      {path : "*" , element : <NotFound/>}
    ]
  }])

  return (

    <TokenContextProvider>
      <CartContextProvider>
                  <Offline>
                    <div className='fixed bottom-3 right-3 z-30 bg-red-200 rounded-xl p-5 px-7 '>
                    <RiWifiOffLine className='inline-block me-2' /> You Are Offline Now !
                    </div>
                  </Offline>
                  <Toaster position='bottom-right' />
          <RouterProvider router={routes}></RouterProvider> 
      </CartContextProvider>
    </TokenContextProvider>

  )
}

