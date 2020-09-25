import React, { useState } from "react"
import Navbar from "./Componente/Navbar.js"
import Titlu from "./ComponentePortofoliu/Titlu.js"
import Proiect from "./ComponentePortofoliu/Proiect.js"
import Footer from "./Componente/Footer.js"
import { CSSTransition } from "react-transition-group"
import Galerie from "./ComponentePortofoliu/Galerie.js"
import "./galerie.css"
let poze = [
  {
    original: require("./Imagini/Portofoliu/CareuForaj/1.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/1.jpg"),
    description: "Inainte",
  },
  {
    original: require("./Imagini/Portofoliu/CareuForaj/2.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/2.jpg"),
    description: "Inainte",
  },
  {
    original: require("./Imagini/Portofoliu/CareuForaj/3.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/3.jpg"),
    description: "Inainte",
  },
  {
    original: require("./Imagini/Portofoliu/CareuForaj/4.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/4.jpg"),
    description: "Inainte",
  },
  {
    original: require("./Imagini/Portofoliu/CareuForaj/5.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/5.jpg"),
    description: "Dupa",
  },
  {
    original: require("./Imagini/Portofoliu/CareuForaj/6.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/6.jpg"),
    description: "Dupa",
  },
  {
    original: require("./Imagini/Portofoliu/CareuForaj/7.jpg"),
    thumbnail: require("./Imagini/Portofoliu/CareuForaj/7.jpg"),
    description: "Dupa",
  },
]

let poze2 = [
  require("./Imagini/Portofoliu/CareuForaj/11.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/12.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/13.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/14.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/15.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/16.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/17.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/18.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/19.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/20.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/21.jpg"),
]
export default function Portofoliu(props) {
  const [show, setShow] = useState(false)
  function inchideGaleria() {
    setShow(false)
  }
  function deschideGaleria() {
    setShow(true)
  }
  return (
    <div>
      <Navbar data={"Navbar2"}></Navbar>
      {show ? <Galerie date={{ poze, inchideGaleria }}></Galerie> : <div></div>}

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
      <Proiect
        date={{
          titlu: "Careu foraj",
          data: "21 Septembrie 2020 - 30 Septembrie 2020",
          locatia: "Bibesti 213",
          poze: poze,
          dimensiuneBara: "110%",
          deschideGaleria,
        }}
      ></Proiect>
      <Proiect
        date={{
          titlu: "Echipare de suprafata si conducta",
          data: "15 Iulie 2020 - 25 Iulie 2020",
          locatia: "Bolaria Sd 2163",
          poze: poze,
          dimensiuneBara: "110%",
          deschideGaleria,
        }}
      ></Proiect>
      <Proiect
        date={{
          titlu: "Echipare de suprafata si conducta",
          data: "15 Iulie 2020 - 25 Iulie 2020",
          locatia: "Bolaria Sd 2163",
          poze: poze,
          dimensiuneBara: "80%",
          deschideGaleria,
        }}
      ></Proiect>
      <Footer></Footer>
    </div>
  )
}
