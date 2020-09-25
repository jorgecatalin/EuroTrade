import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons"
export default function Contact() {
  return (
    <div className="ComponentaContacte">
      <div className="DespreTitluSectiune">
        <div>Detalii contact</div>
      </div>
      <div className="Adresa" style={{ fontSize: "4vh" }}>
        <div className="ContactSubTitlu">Adresa </div>
        <div
          style={{
            fontSize: "4vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div>Strada Garii nr 24 localitatea Potcoava judetul Olt </div>
        </div>
      </div>
      <div className="Adresa" style={{ fontSize: "4vh" }}>
        <div className="ContactSubTitlu">Administrator </div>
        <div className="ContactInformatii">
          <div>George Mustata</div>
          <div style={{ marginTop: "10px" }}>
            0749-820-972
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginLeft: "5px", color: "rgb(111,111,111)" }}
            />
          </div>
        </div>
      </div>
      <div className="Adresa" style={{ fontSize: "4vh" }}>
        <div className="ContactSubTitlu">Oficiul Juridic </div>
        <div className="ContactInformatii">
          <div>Ani Stratomir</div>
          <div style={{ marginTop: "10px" }}>
            0746-833-282
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginLeft: "5px", color: "rgb(111,111,111)" }}
            />
          </div>
        </div>
      </div>

      <div className="Adresa" style={{ fontSize: "4vh" }}>
        <div className="ContactSubTitlu">Contabilitate</div>
        <div className="ContactInformatii">
          <div>Anca</div>
          <div>
            0747 072 373
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                marginLeft: "5px",
                color: "rgb(111,111,111)",
                display: "inline-block",
              }}
            />
          </div>
        </div>
      </div>
      <div className="Adresa" style={{ fontSize: "4vh" }}>
        <div className="ContactSubTitlu">Telefon </div>
        <div>
          +40-249-462-019
          <FontAwesomeIcon
            style={{ marginLeft: "5px", color: "rgb(111,111,111)" }}
            icon={faPhone}
          />
        </div>
      </div>
      <div className="Adresa" style={{ fontSize: "4vh" }}>
        <div className="ContactSubTitlu">E-mail</div>
        <div>
          officces.etc@gmail.com
          <FontAwesomeIcon
            style={{ marginLeft: "5px", color: "rgb(111,111,111)" }}
            icon={faEnvelope}
          />
        </div>
      </div>
    </div>
  )
}
