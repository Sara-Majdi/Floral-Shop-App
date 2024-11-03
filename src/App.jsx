import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import BestSeller from './components/BestSeller'
import CategorySection from './components/CategorySection'
import FAQ from './components/FAQ'
import ContactUsSection from './components/ContactUsSection'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <BestSeller/>
      <CategorySection/>
      <ContactUsSection/>
      <Footer/>
      
    </div>
  )
}

export default App