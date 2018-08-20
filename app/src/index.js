import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./index.css"
import tachyons from "tachyons"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { getPaintings } from "./action-creators/paintings"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
store.dispatch(getPaintings)
