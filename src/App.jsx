import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import BestSeller from './components/BestSeller'
import CategorySection from './components/CategorySection'
import FAQ from './components/FAQ'
import ContactUsSection from './components/ContactUsSection'


function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <BestSeller/>
      <CategorySection/>
      <FAQ/>
      <ContactUsSection/>
      
    </div>
  )
}

export default App