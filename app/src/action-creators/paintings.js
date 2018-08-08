import { SET_PAINTINGS } from "../constants"
import fetch from "isomorphic-fetch"
const url = process.env.REACT_APP_BASE_URL + "/paintings"

export const getPaintings = async (dispatch, getState) => {
  console.log("action creator getPaintings", url)
  const paintings = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_PAINTINGS, payload: paintings })
}
