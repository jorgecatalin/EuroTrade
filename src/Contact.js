import React from "react"
import Navbar from "./Componente/Navbar.js"
import Contacte from "./ComponenteContact/Contact.js"
import Footer from "./Componente/Footer.js"
import GoogleMap from "./ComponenteContact/GoogleMap.js"
export default function Contact(props) {
  return (
    <div>
      <Navbar data={"Navbar2"}></Navbar>
      <Contacte></Contacte>
      <GoogleMap></GoogleMap>
      <Footer></Footer>
    </div>
  )
}
