import { createStore, combineReducers, applyMiddleware } from "redux"
import { paintings } from "./reducers/paintings"
import { carouselPaintings } from "./reducers/home"
import { filterOptions } from "./reducers/filter-paintings"
import { drawer } from "./reducers/drawer"
import { editPaintingOriginalSold } from "./reducers/edit-painting"

import thunk from "redux-thunk"

const store = createStore(
  combineReducers({
    paintings,
    carouselPaintings,
    filterOptions,
    drawer,
    editPaintingOriginalSold
  }),
  applyMiddleware(thunk)
)

export default store
