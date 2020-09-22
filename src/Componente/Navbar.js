import React, { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
export default function Navbar(props) {
  const [display, setDisplay] = useState("none")
  function apasa() {
    console.log(window.location.pathname)
    if (display == "block") {
      setDisplay("none")
    } else {
      setDisplay("block")
    }
  }
  return (
    <div className="Navbar">
      <div className="NavbarTitlu">Euro Trade Consulting</div>
      <div className="NavbarDreapta">
        <Link to="/EuroTrade/Contact">
          <div>CONTACT</div>
        </Link>
        <Link to="/EuroTrade/Portofoliu">
          <div>PORTOFOLIU</div>
        </Link>
        <Link to="/EuroTrade/Utilaje">
          <div>UTILAJE</div>
        </Link>
        <Link to="/EuroTrade">
          <div>ACASA</div>
        </Link>
      </div>
      <div class="NavbarDreaptaResponsive" onClick={apasa}>
        <div style={{ cursor: "pointer", userSelect: "none" }}>=</div>
        <div className="MeniuResponsiv" style={{ display: display }}>
          <div>
            <Link
              style={
                window.location.pathname == "/EuroTrade/Contact"
                  ? { color: "var(--culoare)" }
                  : { color: "white" }
              }
              to="/EuroTrade/Contact"
            >
              CONTACT
            </Link>
          </div>
          <div>
            <Link
              style={
                window.location.pathname == "/EuroTrade/Portofoliu"
                  ? { color: "var(--culoare)" }
                  : { color: "white" }
              }
              to="/EuroTrade/Portofoliu"
            >
              PORTOFOLIU{" "}
            </Link>
          </div>

          <div>
            <Link
              style={
                window.location.pathname == "/EuroTrade/Utilaje"
                  ? { color: "var(--culoare)" }
                  : { color: "white" }
              }
              to="/EuroTrade/Utilaje"
            >
              UTILAJE
            </Link>
          </div>
          <div>
            <Link
              style={
                window.location.pathname == "/EuroTrade/"
                  ? { color: "var(--culoare)" }
                  : { color: "white" }
              }
              to="/EuroTrade"
            >
              ACASA
            </Link>
          </div>

          <div className="MeniuResponsivApasa">x</div>
        </div>
      </div>
    </div>
  )
}
