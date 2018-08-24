import {
  EDIT_PAINTING_SAVE_SUCCEEDED,
  EDIT_PAINTING_UPDATED,
  EDIT_PAINTING_LOADED
} from "../constants"
import { merge } from "ramda"

const initialState = {
  name: "",
  paintingType: ["reproduction"],
  sizes: ["18x24"]
}

export const editPainting = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PAINTING_SAVE_SUCCEEDED:
      return initialState
    case EDIT_PAINTING_UPDATED:
      //console.log("edit reducer", JSON.stringify(action.payload))
      return merge(state, action.payload)
    case EDIT_PAINTING_LOADED:
      return action.payload || initialState
    default:
      return state
  }
}
