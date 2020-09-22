import React from "react"
import Navbar from "./Componente/Navbar.js"
import Titlu from "./ComponentePortofoliu/Titlu.js"
import Proiect from "./ComponentePortofoliu/Proiect.js"
import Footer from "./Componente/Footer.js"
import { CSSTransition } from "react-transition-group"

let poze = [
  require("./Imagini/Portofoliu/CareuForaj/1.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/2.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/3.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/4.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/5.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/6.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/5.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/7.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/8.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/9.jpg"),
  require("./Imagini/Portofoliu/CareuForaj/10.jpg"),
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
  return (
    <div>
      <Navbar></Navbar>
      <Titlu></Titlu>
      <Proiect
        date={{
          titlu: "Careu foraj",
          data: "21 Septembrie 2020 - 30 Septembrie 2020",
          locatia: "Bibesti 213",
          poze: poze,
          dimensiuneBara: "110%",
        }}
      ></Proiect>
      <Proiect
        date={{
          titlu: "Echipare de suprafata si conducta",
          data: "15 Iulie 2020 - 25 Iulie 2020",
          locatia: "Bolaria Sd 2163",
          poze: poze,
          dimensiuneBara: "80%",
        }}
      ></Proiect>
      <Footer></Footer>
    </div>
  )
}
