import {
  FILTERED_PAINTING_PAINTING_SIZE_CHECKED,
  FILTERED_PAINTING_PAINTING_SUBJECT_CHECKED,
  FILTERED_PAINTING_PAINTING_TYPE_CHECKED
} from "../constants"
import { merge, contains, reject, append } from "ramda"
const initialState = {
  size: [],
  subject: [],
  paintingType: []
}

export const filterOptions = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_PAINTING_PAINTING_SIZE_CHECKED:
      //console.log("reducer fired")
      return contains(action.payload, state.size)
        ? merge(state, {
            size: reject(aSize => aSize === action.payload, state.size)
          })
        : merge(state, { size: append(action.payload, state.size) })
    case FILTERED_PAINTING_PAINTING_SUBJECT_CHECKED:
      return contains(action.payload, state.subject)
        ? merge(state, {
            subject: reject(
              aSubject => aSubject === action.payload,
              state.subject
            )
          })
        : merge(state, { subject: append(action.payload, state.subject) })
    case FILTERED_PAINTING_PAINTING_TYPE_CHECKED:
      return contains(action.payload, state.paintingType)
        ? merge(state, {
            paintingType: reject(
              aType => aType === action.payload,
              state.paintingType
            )
          })
        : merge(state, {
            paintingType: append(action.payload, state.paintingType)
          })
    default:
      return state
  }
}
