import React, { Component } from "react"
import handleViewport from "react-in-viewport"
function Despree() {
  return (
    <div className="Despre">
      <div className="DespreStanga">
        <div className="DespreTitluSectiune">
          <div>Despre noi</div>
        </div>
        <div>
          Societatea noastra este o organizatie competenta, deschisa si
          orientata catre client. Societatea noastra este o organizatie
          competenta, deschisa si orientata catre client. Societatea noastra
          este o organizatie competenta, deschisa si orientata catre client.
          Societatea noastra este o organizatie competenta, deschisa si
          orientata catre client. Societatea noastra este o organizatie
          competenta, deschisa si orientata catre client. Societatea noastra
          este o organizatie competenta, deschisa si orientata catre client.
        </div>
      </div>
      <div className="DespreDreapta">
        <img src={require("../Imagini/Despre.jpg")}></img>
      </div>
    </div>
  )
}

class MySectionBlock extends Component {
  getStyle() {
    const { inViewport, enterCount } = this.props
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
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
        <Despree />
      </div>
    )
  }
}
const Comp = handleViewport(MySectionBlock, { rootMargin: "-1.0px" })

export default Comp
