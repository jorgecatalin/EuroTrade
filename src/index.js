import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./transitii.css"
import App from "./App"
import Utilaje from "./Utilaje"
import Portofoliu from "./Portofoliu"
import Contact from "./Contact"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <App />
        </Route>
        <Route exact={true} path="/Utilaje">
          <Utilaje />
        </Route>
        <Route exact={true} path="/Portofoliu">
          <Portofoliu />
        </Route>
        <Route exact={true} path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
