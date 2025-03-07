import { Helmet } from 'react-helmet'
import MainSlider from '../../Copmonents/MainSlider/MainSlider'
import styles from './Home.module.css'
import Electronics from '../../Copmonents/Electronics/Electronics'
import BestCategories from '../../Copmonents/BestCategories/BestCategories'
import WhyUs from '../../Copmonents/WhyUs/WhyUs'
import BrandSlider from '../../Copmonents/BrandsSlider/BrandSlider'

export default function Home() {

  console.log("Hello");
  
  return (
    <div className=' mx-auto'>
                  <Helmet>
                <title>FreshCart-Home</title>
                  </Helmet>
    <MainSlider/>
    <BestCategories/>
    <Electronics/>
    <BrandSlider/>
    <WhyUs/>
    </div>
  )
}
