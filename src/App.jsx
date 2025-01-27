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

export default function App() {

  const routes = createBrowserRouter([{
    path : "" , element : <MainLayout/>,
    children : [
      {index : true , element : <ProtectedRouts><Home/></ProtectedRouts>},
      {path : "cart" , element : <ProtectedRouts><Cart/></ProtectedRouts>},
      {path : "products" , element : <ProtectedRouts><Products/></ProtectedRouts>},
      {path : "categories" , element : <ProtectedRouts><Categories/></ProtectedRouts>},
      {path : "brands" , element : <ProtectedRouts><Brands/></ProtectedRouts>},
      {path : "login" , element : <Login/>},
      {path : "register" , element : <Register/>},
      {path : "productdetails" , element : <ProtectedRouts><ProductDetails/></ProtectedRouts>},
      {path : "*" , element : <NotFound/>}
    ]
  }])

  return (

    <TokenContextProvider>
          <RouterProvider router={routes}></RouterProvider> 
    </TokenContextProvider>

  )
}

