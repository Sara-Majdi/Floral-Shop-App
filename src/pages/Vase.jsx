import React from 'react'
import Navbar from '../components/Navbar'
import FilterAndSort from '../components/FilterAndSort'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function Bouquet() {
  return (
    <div>
        <Navbar/>
        <FilterAndSort/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Bouquet