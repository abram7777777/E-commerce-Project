import { Helmet } from 'react-helmet'
import styles from './Products.module.css'
import LatestProudcts from '../../Copmonents/LatestProudcts/LatestProudcts'

export default function Products() {
  return (
    <>
                  <Helmet>
                <title>FreshCart-Products</title>
                  </Helmet>
                  <div className="flex flex-col justify-center">
                  <h2 class="text-4xl sm:text-5xl relative mx-auto w-fit font-extrabold text-gray-800 mt-6 mb-11 group cursor-default ">
    All Products
    <span class="absolute bottom-0 left-0 right-0 h-1/2 bg-green-300 -z-30 group-hover:h-[90%] group-hover:scale-y-110 transition-all duration-500">
    </span>
</h2>

                  <LatestProudcts/>
                  </div>
    </>
  )
}
