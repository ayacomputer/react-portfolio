import React from 'react'
import Footer from './Footer'
import '../App.css'



export default function MainLayout(props) {
  return (
    <main>



      {props.children}
      <Footer></Footer>

    </main>
  )
}
