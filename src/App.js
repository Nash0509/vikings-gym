import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Aboutus from './Components/Aboutus'
import Signup from './Components/Signup'
import Nav from './Nav'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
         <Nav />
         <Home />
         <Aboutus />
         <Contact />
         <Signup />
         <Footer />
    </div>
  )
}

export default App