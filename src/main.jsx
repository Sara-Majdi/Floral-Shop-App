import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'

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
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
