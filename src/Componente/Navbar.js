import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
let sw = true
export default function Navbar(props) {
  const [display, setDisplay] = useState("none")
  function clickTop() {
    window.scrollTo({ top: 0 })
  }
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 150 && sw) {
        sw = false
        console.log("aiciNavbar")
        document.getElementById("Navbar").classList.add("NavbarFixed")
      } else if (!sw && window.pageYOffset <= 150) {
        sw = true
        console.log("josnavbar")
        document.getElementById("Navbar").classList.remove("NavbarFixed")
      }
    }
  }, [])
  function apasa() {
    console.log(window.location.pathname)
    if (display == "block") {
      setDisplay("none")
    } else {
      setDisplay("block")
    }
  }
  return (
    <div className={props.data} id="Navbar">
      <div className="NavbarTitlu">Euro Trade Consulting</div>
      <div className="NavbarDreapta">
        <Link
          onClick={clickTop}
          style={{ padding: "0 10px 0 10px" }}
          to="/EuroTrade/Contact"
        >
          <div
            style={
              window.location.pathname == "/EuroTrade/Contact"
                ? { borderBottom: "solid var(--culoare) 3px" }
                : { border: "none" }
            }
          >
            CONTACT
          </div>
        </Link>
        <Link
          onClick={clickTop}
          to="/EuroTrade/Portofoliu"
          style={{ padding: "0 10px 0 10px" }}
        >
          <div
            style={
              window.location.pathname == "/EuroTrade/Portofoliu"
                ? { borderBottom: "solid var(--culoare) 3px" }
                : { border: "none" }
            }
          >
            PORTOFOLIU
          </div>
        </Link>
        <Link
          onClick={clickTop}
          to="/EuroTrade/Utilaje"
          style={{ padding: "0 10px 0 10px" }}
        >
          <div
            style={
              window.location.pathname == "/EuroTrade/Utilaje"
                ? { borderBottom: "solid var(--culoare) 3px" }
                : { border: "none" }
            }
          >
            UTILAJE
          </div>
        </Link>
        <Link
          onClick={clickTop}
          to="/EuroTrade"
          style={{ padding: "0 10px 0 10px" }}
        >
          <div
            style={
              window.location.pathname == "/EuroTrade"
                ? { borderBottom: "solid var(--culoare) 3px" }
                : { border: "none" }
            }
          >
            ACASA
          </div>
        </Link>
      </div>
      <div className="NavbarDreaptaResponsive" onClick={apasa}>
        <div style={{ cursor: "pointer", userSelect: "none" }}>=</div>
        <div className="MeniuResponsiv" style={{ display: display }}>
          <div>
            <Link
              onClick={clickTop}
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
              onClick={clickTop}
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
              onClick={clickTop}
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
              onClick={clickTop}
              style={
                window.location.pathname == "/EuroTrade"
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
