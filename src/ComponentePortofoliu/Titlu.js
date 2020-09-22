import React from "react"
import BaraDreapta from "./BaraDreapta.js"
import { CSSTransition } from "react-transition-group"

export default function Titlu() {
  return (
    <div className="containerPortofoliuSus">
      <CSSTransition appear={true} in={true} timeout={500} classNames="fade1">
        <div className="containerPortofoliuSusTitlu">
          Peste 40 proiecte completate{" "}
        </div>
      </CSSTransition>
    </div>
  )
}
