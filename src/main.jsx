import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Bouquet from './pages/Bouquet.jsx'
//import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import ProductDetailTry from './components/BouquetProductDetails.jsx'
import BouquetProductDetailsPage from './pages/BouquetProductDetailsPage.jsx'
import Vase from './pages/Vase.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import FlowerCarePage from './pages/FlowerCarePage.jsx'
import FlowerCareBouquetPage from './pages/FlowerCareBouquetPage.jsx'
import FlowerCareBasketPage from './pages/FlowerCareBasketPage.jsx'
import FlowerCareVasePage from './pages/FlowerCareVasePage.jsx'

import FlowerCareBoxPage from './pages/FlowerCareBoxPage.jsx'
import VaseProductDetailsPage from './pages/VaseProductDetailsPage.jsx'

const Layout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <App />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
         path:'/bouquet',
         element: <Bouquet />,
      },
      {
        path:'/product/:id',
        element: <BouquetProductDetailsPage />,
      },
      {
        path:'/vase',
        element: <Vase />,
      },
      {
        path:'/product/:id',
        element: <VaseProductDetailsPage />,
      },

      // {
      //Box
      //   path:'/',
      //   element: <App />,
      // },
      // {
      //Basket
      //   path:'/',
      //   element: <App />,
      // },
       {
         path:'/contactUs',
         element: <ContactUsPage />,
       },
       {
         path:'/faqs',
         element: <FAQPage/>,
       },
       // {
      //   path:'/storeLocator',
      //   element: <App />,
      // },
       {
         path:'/flowerCare',
         element: <FlowerCarePage />,
       },
       {
         path:'/flowerCareBouquet',
         element: <FlowerCareBouquetPage />,
       },
       {
         path:'/flowerCareVase',
         element: <FlowerCareVasePage />,
       },
       {
         path:'/flowerCareBasket',
         element: <FlowerCareBasketPage />,
       },
       {
         path:'/flowerCareBox',
         element: <FlowerCareBoxPage />,
       },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
