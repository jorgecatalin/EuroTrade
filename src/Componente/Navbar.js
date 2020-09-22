import React, { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
export default function Navbar(props) {
  const [update, setUpdate] = useState(false)
  function schimba() {
    setUpdate(true)
  }
  return (
    <div className="Navbar">
      <div className="NavbarTitlu">Euro Trade Consulting</div>
      <div className="NavbarDreapta">
        <Link to="/Contact">
          <div>CONTACT</div>
        </Link>
        <Link to="/Portofoliu">
          <div>PORTOFOLIU</div>
        </Link>
        <Link to="/Utilaje">
          <div>UTILAJE</div>
        </Link>
        <Link to="/">
          <div>ACASA</div>
        </Link>
      </div>
    </div>
  )
}
