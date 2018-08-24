import React, { Component } from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/home"
import ListPaintings from "./pages/paintings"
import PaintingView from "./pages/paintings/view"
import AboutMe from "./pages/about-me"
import FilterPaintings from "./pages/paintings/filter-paintings"
import Admin from "./pages/admin/admin"
import AdminListPaintings from "./pages/admin/list-paintings"
import SinglePaintingEdit from "./pages/admin/single-painting"

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
          <Route exact path="/admin/paintings" component={AdminListPaintings} />
          <Route exact path="/admin/:id/edit" component={SinglePaintingEdit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
