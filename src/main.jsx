import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Bouquet from './pages/Bouquet.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'

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
        path:'/productDetailsBouquet',
        element: <ProductDetailsPage />,
      },
      {
        path:'/vase',
        element: <Bouquet />,
      },
      // {
      //   path:'/',
      //   element: <App />,
      // },
      // {
      //   path:'/',
      //   element: <App />,
      // },
      // {
      //   path:'/',
      //   element: <App />,
      // },
      // {
      //   path:'/',
      //   element: <App />,
      // },// {
      //   path:'/',
      //   element: <App />,
      // },
      // {
      //   path:'/',
      //   element: <App />,
      // },// {
      //   path:'/',
      //   element: <App />,
      // },
      // {
      //   path:'/',
      //   element: <App />,
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
