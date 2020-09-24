import React from "react"

export default function Utilaj() {
  return (
    <div className="UtilajContainer">
      <div className="UtilajStanga">
        <img src={require("../Imagini/macara.jpg")}></img>
      </div>
      <div className="UtilajDreapta">
        <div style={{ fontWeight: "900", fontSize: "6vh" }}>Macara x214</div>
        <div>Pret : 2100/lei zi</div>
        <div>
          Descriere acici ......... ............ .... a. aaaaaaaaaaaaaaa aaaaa
          aaaa ..
        </div>
        <div>Model X serie 214</div>
      </div>
    </div>
  )
}
