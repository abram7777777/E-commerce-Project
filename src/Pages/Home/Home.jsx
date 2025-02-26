import { Helmet } from 'react-helmet'
import CategorySlider from '../../Copmonents/CategorySlider/CategorySlider'
import LatestProudcts from '../../Copmonents/LatestProudcts/LatestProudcts'
import MainSlider from '../../Copmonents/MainSlider/MainSlider'
import styles from './Home.module.css'

export default function Home() {

  console.log("Hello");
  
  return (
    <div className='mt-20 w-[92%] mx-auto'>
                  <Helmet>
                <title>FreshCart-Home</title>
                  </Helmet>
    <MainSlider/>
    <CategorySlider/>
    <LatestProudcts/>
    </div>
  )
}
