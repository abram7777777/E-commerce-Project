import { Outlet } from 'react-router-dom'
import Navbar from '../../Copmonents/Navbar/Navbar'
import Footer from '../../Copmonents/Footer/Footer'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <div className='mt-[72px]'>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

