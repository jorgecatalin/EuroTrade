import React from "react"
import { Link } from "react-router-dom"
import Card from "./Card.js"

const utilaje = [
  {
    imagine: require("../Imagini/macara.jpg"),
    titlu: "Macara S712 2000lei/zi",
    subtitlu:
      "Macarale x29 cu  detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii detalii ",
  },
  {
    imagine: require("../Imagini/macara.jpg"),
    titlu: "Macara FAWF",
    subtitlu: "1500lei/zi",
  },
  {
    imagine: require("../Imagini/macara.jpg"),
    titlu: "Macara 22FA2",
    subtitlu: "2500lei/zi",
  },
  {
    imagine: require("../Imagini/macara.jpg"),
    titlu: "Macara 22FA2",
    subtitlu: "2500lei/zi",
  },
  {
    imagine: require("../Imagini/macara.jpg"),
    titlu: "Macara 22FA2",
    subtitlu: "2500lei/zi",
  },
  {
    imagine: require("../Imagini/macara.jpg"),
    titlu: "Macara 22FA2",
    subtitlu: "2500lei/zi",
  },
]
export default function Servicii() {
  return (
    <div className="ServiciiContainer">
      <div className="DespreTitluSectiune">
        <div>Servicii</div>
      </div>
      <div>
        Dispunem de nenunamarate servicii in domeniul constructiilor precum
        serviciu, serviciu, serviciu, serviciu ...
      </div>

      <div className="DespreTitluSectiune">
        <div>Inchiriem urmatoarele utilaje</div>
      </div>

      <div className="ServiciiCarduri">
        {utilaje.map((item) => {
          return <Card data={item}></Card>
        })}
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Link to="/EuroTrade/Utilaje">
          <div className="ServiciiButon">UTILAJE</div>
        </Link>
      </div>
    </div>
  )
}
