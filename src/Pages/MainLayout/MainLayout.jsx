import { Outlet } from 'react-router-dom'
import Navbar from '../../Copmonents/Navbar/Navbar'
import Footer from '../../Copmonents/Footer/Footer'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

