import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function MainLayout(props) {
  return (
    <main>

      {/* nav */}
      <Header></Header>

      {props.children}

      {/* footer */}
      <Footer></Footer>

    </main>
  )
}
