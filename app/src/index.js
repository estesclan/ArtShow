import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
//import { bindActionCreators } from "../../../../../Library/Caches/typescript/2.9/node_modules/redux"
import { getPaintings } from "./action-creators/paintings"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
store.dispatch(getPaintings)
