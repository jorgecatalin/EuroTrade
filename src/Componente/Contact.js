import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
export default function Contact() {
  return (
    <div className="Contact">
      <div className="DespreTitluSectiune">
        <div>Detalii contact</div>
      </div>
      <div className="Adresa">
        <div className="ContactSubTitlu">Adresa </div>
        <div>Strada Garii nr 24 localitatea Potcoava județul Olt </div>
      </div>
      <div className="Adresa">
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
      <div className="Adresa">
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

      <div className="Adresa">
        <div className="ContactSubTitlu">Contabilitate </div>
        <div className="ContactInformatii">
          <div>Anca</div>
          <div style={{ marginTop: "10px" }}>
            0747 072 373
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginLeft: "5px", color: "rgb(111,111,111)" }}
            />
          </div>
        </div>
      </div>
      <div className="Adresa">
        <div className="ContactSubTitlu">Telefon </div>
        <div>
          +40-249-462-019
          <FontAwesomeIcon
            style={{ marginLeft: "5px", color: "rgb(111,111,111)" }}
            icon={faPhone}
          />
        </div>
      </div>
      <div className="Adresa">
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
