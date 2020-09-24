import React from "react"

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.data.imagine}></img>
      <div className="CardTitlu">{props.data.titlu}</div>
      <div className="CardSubtitlu">{props.data.subtitlu}</div>
      <div className></div>
    </div>
  )
}
