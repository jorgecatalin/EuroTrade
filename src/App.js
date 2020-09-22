import React from "react"
import Navbar from "./Componente/Navbar.js"
import BackgroundTop from "./Componente/BackgroundTop.js"
import Despre from "./Componente/Despre.js"
import Contact from "./Componente/Contact.js"
import Footer from "./Componente/Footer.js"
import InformatiiNumar from "./Componente/InformatiiNumar.js"
import { CSSTransition } from "react-transition-group"
function App() {
  return (
    <div className="ContainerApp">
      <CSSTransition appear={true} in={true} timeout={500} classNames="fade2">
        <Navbar></Navbar>
      </CSSTransition>
      <BackgroundTop></BackgroundTop>
      <Despre></Despre>
      <InformatiiNumar></InformatiiNumar>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
