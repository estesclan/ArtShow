import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import store from "./store"
import "./index.css"
import tachyons from "tachyons"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { getPaintings } from "./action-creators/paintings"
import { deepPurple, amber, indigo, black } from "@material-ui/core/colors"
import { CssBaseline } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#333"
    },
    secondary: amber,
    background: {
      default: "#111"
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
store.dispatch(getPaintings)
