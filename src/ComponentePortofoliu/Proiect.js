import React from "react"
import BaraDreapta from "./BaraDreapta.js"

export default function Proiect(props) {
  const data = props.date.poze.map((id) => {
    return <img src={id}></img>
  })
  return (
    <div className="ContainerProiect">
      <BaraDreapta></BaraDreapta>
      <div className="containerPortofoliuDate">
        <div style={{ fontWeight: 900 }}>{props.date.titlu}</div>
        <div style={{ fontSize: "3vh" }}>{props.date.data}</div>
        <div style={{ fontSize: "3vh" }}>{props.date.locatia}</div>
        <div className="pozePortofoliu">{data}</div>
      </div>
    </div>
  )
}
