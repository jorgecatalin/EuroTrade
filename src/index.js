import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./transitii.css"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import App from "./App.js"
import Utilaje from "./Utilaje.js"
import Portofoliu from "./Portofoliu.js"
import Contact from "./Contact.js"
//const Utilaje = lazy(() => import("./Utilaje"))
//const Portofoliu = lazy(() => import("./Portofoliu"))
//const Contact = lazy(() => import("./Contact"))
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact={true} path="/EuroTrade">
          <App />
        </Route>
        <Route exact={true} path="/EuroTrade/Utilaje">
          <Utilaje />
        </Route>
        <Route exact={true} path="/EuroTrade/Portofoliu">
          <Portofoliu />
        </Route>
        <Route exact={true} path="/EuroTrade/Contact">
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
