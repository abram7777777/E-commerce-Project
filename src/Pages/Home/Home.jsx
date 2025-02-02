import CategorySlider from '../../Copmonents/CategorySlider/CategorySlider'
import MainSlider from '../../Copmonents/MainSlider/MainSlider'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className='mt-20'>
    <MainSlider/>
    <CategorySlider/>
    </div>
  )
}
