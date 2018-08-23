import { EDIT_PAINTING_ORIGINIAL_SOLD } from "../constants"

export const editPaintingOriginalSold = (state = [], action) => {
  switch (action.type) {
    case EDIT_PAINTING_ORIGINIAL_SOLD:
      return action.payload
    default:
      return state
  }
}
