import { SET_PAINTINGS } from "../constants"

export const paintings = (state = [], action) => {
  switch (action.type) {
    case SET_PAINTINGS:
      return action.payload
    default:
      return state
  }
}
