import React, { setState, Component } from "react"
import CountUp from "react-countup"
import handleViewport from "react-in-viewport"

let numar = 1
class InformatiiNumar extends Component {
  constructor(props) {
    super(props)
    this.state = { numar: 1 }
    numar = 1
  }
  arata(x) {
    console.log("afawfwa")
    if (this.props.inViewport && numar < 5) {
      numar++
      return <CountUp start={0} end={x} duration={3} delay={0.3}></CountUp>
    } else return <div>{x}</div>
  }
  render() {
    return (
      <div className="InformatiiNumar">
        <div className="InformatiiNumarCard">
          <div className="InformatiiNumarCardNumar">{this.arata(122)}</div>
          <div>Proiecte</div>
        </div>
        <div className="InformatiiNumarCard">
          <div className="InformatiiNumarCardNumar">{this.arata(33)}</div>
          <div>Angajati</div>
        </div>
        <div className="InformatiiNumarCard">
          <div className="InformatiiNumarCardNumar">{this.arata(77)}</div>
          <div>Utilaje</div>
        </div>
        <div className="InformatiiNumarCard">
          <div className="InformatiiNumarCardNumar">{this.arata(55)}</div>
          <div>Premii</div>
        </div>
      </div>
    )
  }
}
const view = handleViewport(InformatiiNumar)
export default view
