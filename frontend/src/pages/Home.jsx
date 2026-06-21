import React from 'react'
import Hero from '../components/Hero'
import ProductCards from '../components/ProductCards'
import TopProducts from '../components/TopProducts'
function Home() {
  return (
    <div>
      <Hero />
      <TopProducts />
      <ProductCards />
    </div>
  )
}

export default Home