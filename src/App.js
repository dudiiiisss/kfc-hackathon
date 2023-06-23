import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import MainRoutes from './Routes/MainRoutes'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App