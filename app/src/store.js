import { createStore, combineReducers, applyMiddleware } from "redux"
import { paintings } from "./reducers/paintings"
import { carouselPaintings } from "./reducers/home"
import { filterOptions } from "./reducers/filter-paintings"

import thunk from "redux-thunk"

const store = createStore(
  combineReducers({
    paintings,
    carouselPaintings,
    filterOptions
  }),
  applyMiddleware(thunk)
)

export default store
