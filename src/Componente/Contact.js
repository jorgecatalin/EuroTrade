import React, { Suspense, Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import handleViewport from "react-in-viewport"

const GoogleMap = React.lazy(() => import("./GoogleMap.js"))

let x = false
function Contact() {
  return (
    <div className="Contact">
      <div className="DespreTitluSectiune">
        <div>Detalii contact</div>
      </div>
      <div className="ContactRow">
        <div style={{ flex: "1" }}>
          <div className="Adresa">
            <div className="ContactSubTitlu">Adresa </div>
            <div>Strada Garii nr 24 localitatea Potcoava județul Olt </div>
          </div>
          <div className="Adresa">
            <div className="ContactSubTitlu">Administrator </div>
            <div className="ContactInformatii">
              <div>George Mustata</div>
              <div style={{ marginTop: "10px" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    position: "absolute",
                    marginLeft: "-4vh",
                    marginTop: "3px",
                    color: "rgb(111,111,111)",
                  }}
                />
                0749-820-972
              </div>
            </div>
          </div>
          <div className="Adresa">
            <div className="ContactSubTitlu">Oficiul Juridic </div>
            <div className="ContactInformatii">
              <div>Ani Stratomir</div>
              <div style={{ marginTop: "10px" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    position: "absolute",
                    marginLeft: "-4vh",
                    marginTop: "3px",
                    color: "rgb(111,111,111)",
                  }}
                />
                0746-833-282
              </div>
            </div>
          </div>

          <div className="Adresa">
            <div className="ContactSubTitlu">Contabilitate </div>
            <div className="ContactInformatii">
              <div>Anca</div>
              <div style={{ marginTop: "10px" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    position: "absolute",
                    marginLeft: "-4vh",
                    marginTop: "3px",
                    color: "rgb(111,111,111)",
                  }}
                />
                0747 072 373
              </div>
            </div>
          </div>
          <div className="Adresa">
            <FontAwesomeIcon
              style={{
                marginLeft: "15px",
                marginTop: "3px",
                color: "rgb(111,111,111)",
              }}
              icon={faPhone}
            />
            <div className="ContactSubTitlu">Telefon </div>
            <div>+40-249-462-019</div>
          </div>
          <div className="Adresa">
            <FontAwesomeIcon
              style={{
                marginLeft: "15px",
                marginTop: "3px",
                color: "rgb(111,111,111)",
              }}
              icon={faEnvelope}
            />
            <div className="ContactSubTitlu">E-mail</div>
            <div>officces.etc@gmail.com</div>
          </div>
        </div>
        <div style={{ flex: "1", position: "relative", minHeight: "400px" }}>
          <Suspense fallback={<div>Loading...</div>}>
            {x ? <GoogleMap /> : <div>Se incarca mapa</div>}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
class MySectionBlock extends Component {
  getStyle() {
    const { inViewport, enterCount } = this.props
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      x = true
      return { WebkitTransition: "opacity 0.75s ease-in-out" }
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" }
    } else {
      return {}
    }
  }
  render() {
    return (
      <div className="content" style={this.getStyle()}>
        <Contact />
      </div>
    )
  }
}
const Comp = handleViewport(MySectionBlock, { rootMargin: "-1.0px" })

export default Comp
