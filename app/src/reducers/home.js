import { SET_CAROUSEL_PAINTINGS } from "../constants"

export const carouselPaintings = (state = [], action) => {
  switch (action.type) {
    case SET_CAROUSEL_PAINTINGS:
      return action.payload
    default:
      return state
  }
}
