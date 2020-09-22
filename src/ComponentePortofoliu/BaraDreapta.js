import React from "react"
import { customProps } from "react-in-viewport"

export default function BaraDreapta(props) {
  return (
    <div className="BaraDreapta" style={{ height: props.data }}>
      <div className="Bulina"></div>
    </div>
  )
}
