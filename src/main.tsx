import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import BasicForm from './pages/BasicForm.tsx';
import RootLayout from './components/RootLayout.tsx';
import AdvancedForm from './pages/AdvancedForm.tsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children:[  {
      path: "/advanced-form",
      element: <AdvancedForm />,
    },
    {
    path:'/',
    element:<BasicForm/>
  
  }]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
