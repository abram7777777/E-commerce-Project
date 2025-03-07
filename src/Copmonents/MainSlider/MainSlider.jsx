import styles from './MainSlider.module.css'
import sliderImage1 from  '../../assets/main1.jpg';
import sliderImage2 from  '../../assets/main2.jpg';
import sliderImage3 from  '../../assets/main3.png';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


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
    <div className='flex '>
      <div className='w-full'>
      <Slider {...settings}>
      <div className="relative w-full">
  <img className="brightness-75 block w-full" src={sliderImage1} alt="electronics" />
<div className="absolute top-1/2 -translate-y-1/2 xl:-translate-y-3/4 4xl:-translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-0 sm:gap-4 text-center items-center justify-center">
<p className="text-[4vw] lg:text-5xl M-font sm:space-y-3 p-1 text-white">
  <span className="inline-block bg-black/50 p-1 sm:p-3 rounded font-normal" style={{animationDelay: '0.5s'}}>power up your world</span>
<span className="inline-block bg-black/50 p-1 sm:p-3 rounded font-normal" style={{animationDelay: '0.7s'}}>with largest collection of <span className="text-green-400 font-bold">Electronic Products </span></span>
</p>
<Link className="block w-full md:w-3/6" to={`/spacategory/${"6439d2d167d9aa4ca970649f"}`} style={{animationDelay: '0.9s'}}>
<button className="w-full relative  h-7 sm:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#86EFAC_0%,#86EFAC_50%,#bd5fff_100%)]" />
<span className="inline-flex h-full w-full font-bold cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm text-white hover:text-green-300 backdrop-blur-3xl gap-2 undefined">Shop Now</span>
</button>
</Link>
</div>
</div>

<div className="swiper-slide swiper-slide-next" style={{width: 1519, marginRight: 30}}>
  <div className="relative w-fit mx-auto">
  <img className="brightness-90 block w-full" src={sliderImage2} alt="men Fashion" />
<div className="w-3/4 absolute top-1/2 -translate-y-1/2 2xl:-translate-y-3/4 4xl:-translate-y-1/2 -translate-x-1/2 left-1/2 sm:left-[45%] flex flex-col gap-1 text-center md:text-start items-start justify-center">
<h3 className="text-[5vw] lg:text-5xl font-extrabold italic w-full lg:w-3/4 text-green-500 sub-font" style={{animationDelay: '0.5s'}}>Your Style !</h3>
<p className="lg:space-y-5 text-[4vw] lg:text-5xl w-full lg:w-3/4 M-font whitespace-break-spaces leading-relaxed tracking-wider sm:p-3">
<span className="inline-block leading-snug text-white" style={{animationDelay: '0.7s'}}>Choose the lifestyle</span>
<span className="inline-block text-white " style={{animationDelay: '0.7s'}}>you will lead</span>
<span className="inline-block text-white leading-snug sm:leading-relaxed" style={{animationDelay: '0.9s'}}>with awesome collection of <span className='text-green-300 inline-block'>Men Fashion</span></span>
</p>
<Link to={`/spacategory/${"6439d5b90049ad0b52b90048"}`} className="block w-full md:w-3/6" href="/Men's Fashion/Products/6439d5b90049ad0b52b90048/category" style={{animationDelay: '0.9s'}}>
<button className="w-full relative  h-7 sm:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#86EFAC_0%,#86EFAC_50%,#bd5fff_100%)]" />
<span className="inline-flex h-full w-full font-bold cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm text-white hover:text-green-100 backdrop-blur-3xl gap-2 undefined">Discover Now</span>
</button>
</Link>
</div>
</div>
</div>


<div className="swiper-slide swiper-slide-next" style={{width: 1519, marginRight: 30}}>
  <div className="relative w-fit mx-auto">
  <img className="brightness-90 block w-full" src={sliderImage3} alt="woman Fashion" />
<div className="w-3/4 absolute top-1/2 -translate-y-1/2 xl:-translate-y-3/4 4xl:-translate-y-1/2 translate-x-1/2 right-1/2 sm:pe-10 sm:right-1/3 flex flex-col gap-1 text-center items-center justify-center">
<h3 className="sm:bg-transparent  text-[5vw] w-fit lg:text-5xl font-extrabold italic lg:w-3/4 text-green-500 sub-font" style={{animationDelay: '0.5s'}}>Summer Collection</h3>
<p className="lg:space-y-5  text-[4vw] lg:text-5xl lg:w-3/4 M-font whitespace-break-spaces leading-relaxed tracking-wider sm:p-3">
<span className="inline-block leading-snug sm:bg-transparent p-1 text-white" style={{animationDelay: '0.7s'}}>sustainable fashion wear</span>
<span className="inline-block sm:bg-transparent p-1 text-white" style={{animationDelay: '0.9s'}}>with Special Products</span>
</p>
<Link to={`/spacategory/${"6439d58a0049ad0b52b9003f"}`} className="block w-full md:w-3/6" href="/Women's Fashion/Products/6439d58a0049ad0b52b9003f/category" style={{animationDelay: '1s'}}>
<button className="w-full relative  h-7 sm:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#86EFAC_0%,#86EFAC_50%,#bd5fff_100%)]" />
<span className="inline-flex h-full w-full font-bold cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm text-white backdrop-blur-3xl gap-2 undefined hover:text-green-100">See More</span>
</button>
</Link>
</div>
</div>
</div>


</Slider>
</div>
</div>


  )
}
