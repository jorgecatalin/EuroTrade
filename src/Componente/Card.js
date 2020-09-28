import React, { Component } from "react"
import handleViewport from "react-in-viewport"

function Card(props) {
  return (
    <div>
      <img src={props.data.imagine}></img>
      <div className="CardTitlu">{props.data.titlu}</div>
      <div className="CardSubtitlu">{props.data.subtitlu}</div>
      <div className></div>
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
      <div className="Card" style={this.getStyle()}>
        <Card data={this.props.data} />
      </div>
    )
  }
}
const Comp = handleViewport(MySectionBlock, { rootMargin: "-1.0px" })

export default Comp
