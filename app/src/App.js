import React, { Component } from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/home"
import ListPaintings from "./pages/paintings"
import PaintingView from "./pages/paintings/view"
import AboutMe from "./pages/about-me"
import FilterPaintings from "./pages/paintings/filter-paintings"
import Admin from "./pages/admin"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/paintings" component={ListPaintings} />
          <Route exact path="/paintings/filter" component={FilterPaintings} />
          <Route exact path="/paintings/:id/view" component={PaintingView} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/supersecretadmin" component={Admin} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
