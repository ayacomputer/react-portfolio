import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function MainLayout(props) {
  return (
    <main>

        {/* nav */}
        <Navbar></Navbar>

        {props.children}
        
        {/* footer */}
        <Footer></Footer>

    </main>
  )
}
