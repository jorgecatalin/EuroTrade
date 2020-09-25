import React, { useState } from "react"
import BaraDreapta from "./BaraDreapta.js"

export default function Proiect(props) {
  const data = props.date.poze.map((id) => {
    return (
      <div className="pozaProiect">
        <img src={id.original} onClick={props.date.deschideGaleria}></img>
        <div className="descrierePozaProiect">{id.description}</div>
      </div>
    )
  })
  return (
    <div>
      <div className="ContainerProiect">
        <BaraDreapta data={props.date.dimensiuneBara}></BaraDreapta>
        <div className="containerPortofoliuDate">
          <div style={{ fontWeight: 900 }}>{props.date.titlu}</div>
          <div style={{ fontSize: "3vh" }}>{props.date.data}</div>
          <div style={{ fontSize: "3vh" }}>{props.date.locatia}</div>
          <div className="pozePortofoliu">{data}</div>
        </div>
      </div>
    </div>
  )
}
