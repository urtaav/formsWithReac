import { Outlet } from 'react-router'
import Header from './Header'
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 lg:px-0 '>
        <Header/>
        <Outlet />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
    </div>
  )
}

export default RootLayout