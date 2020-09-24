import React from "react"
import Navbar from "./Componente/Navbar.js"
import BackgroundTop from "./Componente/BackgroundTop.js"
import Despre from "./Componente/Despre.js"
import Contact from "./Componente/Contact.js"
import Footer from "./Componente/Footer.js"
import InformatiiNumar from "./Componente/InformatiiNumar.js"
import Servicii from "./Componente/Servicii.js"
import Proiecte from "./Componente/Proiecte.js"
import Carousel from "./Componente/Carousel.js"
import Barasus from "./Componente/Barasus.js"
import { CSSTransition } from "react-transition-group"
function App() {
  return (
    <div className="ContainerApp">
      <CSSTransition appear={true} in={true} timeout={500} classNames="fade2">
        <Navbar data={"Navbar"}></Navbar>
      </CSSTransition>
      <Carousel></Carousel>
      <Despre></Despre>
      <InformatiiNumar></InformatiiNumar>
      <Servicii></Servicii>
      <Proiecte></Proiecte>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
