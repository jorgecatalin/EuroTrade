import React from "react"
import { CSSTransition } from "react-transition-group"
export default function BackgroundTop() {
  return (
    <div className="BackgroundTop">
      <CSSTransition appear={true} in={true} timeout={500} classNames="fade1">
        <div className="BackgroundTopTransitie">
          <div>IN BUSINESS DE PESTE 15 ANI</div>
          <div className="BackgroundTopButton">CONTACT</div>
        </div>
      </CSSTransition>
    </div>
  )
}
