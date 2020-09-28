import React from "react"
import Navbar from "./Componente/Navbar.js"
import Utilaj from "./ComponenteUtilaje/Utilaj.js"
import Footer from "./Componente/Footer.js"
import { CSSTransition } from "react-transition-group"
export default function Utilaje(props) {
  return (
    <div>
      <CSSTransition appear={true} in={true} timeout={500} classNames="fade2">
        <Navbar data={"Navbar2"}></Navbar>
      </CSSTransition>
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
