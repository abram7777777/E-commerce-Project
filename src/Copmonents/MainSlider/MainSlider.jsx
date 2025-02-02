import styles from './MainSlider.module.css'
import sliderImage1 from  '../../assets/slider-image-1.jpeg';
import sliderImage2 from  '../../assets/slider-image-2.jpeg';
import sliderImage3 from  '../../assets/slider-image-3.jpeg';
import Slider from 'react-slick';


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : false ,
  autoplay : true
 
};


export default function MainSlider() {
  

  return (
    <div className='w-[92%] mx-auto my-11 flex'>
      <div className='lg:w-3/4 w-full'>
      <Slider {...settings}>
        <div>
          <img className='w-full h-[400px]' src={sliderImage1} alt="" />
        </div>
        <div>
          <img className='w-full h-[400px]' src={sliderImage2} alt="" />
        </div>
        <div>
          <img className='w-full h-[400px]' src={sliderImage3} alt="" />
        </div>
      </Slider>
      </div>
      <div className='w-1/4 hidden lg:block'>
      <img className='w-full h-[200px]' src={sliderImage2} alt="" />
      <img className='w-full h-[200px]' src={sliderImage3} alt="" />
      </div>

    </div>
  )
}
