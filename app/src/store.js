import { createStore, combineReducers, applyMiddleware } from "redux"
import { paintings } from "./reducers/paintings"
import { carouselPaintings } from "./reducers/home"
import thunk from "redux-thunk"

const store = createStore(
  combineReducers({
    paintings,
    carouselPaintings
  }),
  applyMiddleware(thunk)
)

export default store
