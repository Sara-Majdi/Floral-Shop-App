import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FlowerCareList from '../components/FlowerCareList'


const FlowerCarePage = () => {
  return (
    <div>
        <Navbar/>
        <FlowerCareList/>
        <Footer/>
    </div>
  )
}

export default FlowerCarePage