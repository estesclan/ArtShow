import React, { Component } from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/home"
import ListPaintings from "./pages/paintings"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/paintings" component={ListPaintings} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
