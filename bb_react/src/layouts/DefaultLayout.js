import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../componenti/Header.js"
import Navbar from "../componenti/Navbar.js"
import Footer from "../componenti/Footer.js"

const DefaultLayout = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default DefaultLayout