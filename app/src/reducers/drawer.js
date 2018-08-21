import { DRAWER_TOGGLED } from "../constants"

export const drawer = (
  state = {
    open: false
  },
  action
) => {
  switch (action.type) {
    case DRAWER_TOGGLED:
      //console.log("DRAWER TOGGLE REDUCER FIRED..old state", state)
      return { open: !state.open }
    default:
      return state
  }
}
