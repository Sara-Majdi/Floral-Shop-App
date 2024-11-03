import React from 'react'
import ContactUsSection from '../components/ContactUsSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUsInfo from '../components/ContactUsInfo'

const ContactUsPage = () => {
  return (
    <div>
        <Navbar/>
        <ContactUsInfo/>
        <ContactUsSection/>
        <Footer/>
    </div>
  )
}

export default ContactUsPage