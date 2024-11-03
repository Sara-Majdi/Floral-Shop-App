import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VaseProductList from '../components/VaseProductList'

function Vase() {
  return (
    <div>
        <Navbar/>
        <VaseProductList/>
        <Footer/>
    </div>
  )
}

export default Vase