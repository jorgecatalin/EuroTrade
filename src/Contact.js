import React from "react"
import Navbar from "./Componente/Navbar.js"
import Contacte from "./Componente/Contact.js"
import Footer from "./Componente/Footer.js"
import { CSSTransition } from "react-transition-group"

export default function Contact(props) {
  return (
    <div>
      <CSSTransition appear={true} in={true} timeout={500} classNames="fade2">
        <Navbar data={"Navbar2"}></Navbar>
      </CSSTransition>
      <Contacte></Contacte>
      <Footer></Footer>
    </div>
  )
}
