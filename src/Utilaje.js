import React from "react"
import Navbar from "./Componente/Navbar.js"
import Utilaj from "./ComponenteUtilaje/Utilaj.js"
import Footer from "./Componente/Footer.js"
export default function Utilaje(props) {
  return (
    <div>
      <Navbar data={"Navbar2"}></Navbar>
      <div
        style={{
          margin: "15vh 0 0 0",
          display: "flex",
          position: "relative",
          justifyContent: "center",
        }}
      >
        Portofoliu
      </div>
      <Utilaj></Utilaj>
      <Utilaj></Utilaj>
      <Utilaj></Utilaj>
      <Utilaj></Utilaj>
      <Footer></Footer>
    </div>
  )
}
