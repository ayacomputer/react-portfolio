import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import '../App.css'



export default function MainLayout(props) {
  return (
    <main>


      <NavBar></NavBar>

      {props.children}
      <Footer></Footer>

    </main>
  )
}
