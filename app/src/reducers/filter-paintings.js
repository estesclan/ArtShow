import { FILTERED_PAINTING_PAINTING_SIZE_CHECKED } from "../constants"
import { merge } from "ramda"
const initialState = {
  size: null,
  subject: null,
  paintingType: null
}

export const filterOptions = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_PAINTING_PAINTING_SIZE_CHECKED:
      //console.log("reducer fired")
      return merge(state, { size: action.payload })
    default:
      return state
  }
}
