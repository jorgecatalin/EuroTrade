import React from "react"
import { Link } from "react-router-dom"
export default function Proiecte() {
  return (
    <div className="ProiecteContainer">
      <div className="DespreTitluSectiune">
        <div>Proiecte</div>
      </div>
      <div>Firma noastra a realizat peste 3333 proiecte in ultimii 15 ani</div>
      <div>Imagine proiect aici</div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Link to="/EuroTrade/Portofoliu">
          <div className="ServiciiButon">PROIECTE</div>
        </Link>
      </div>
    </div>
  )
}
