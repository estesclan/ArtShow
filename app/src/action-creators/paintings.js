import { SET_PAINTINGS, EDIT_PAINTING_SAVE_SUCCEEDED } from "../constants"
import fetch from "isomorphic-fetch"
const url = process.env.REACT_APP_BASE_URL + "/paintings"

export const getPaintings = async (dispatch, getState) => {
  //console.log("action creator getPaintings", url)
  const paintings = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_PAINTINGS, payload: paintings })
}

export const editPainting = history => async (dispatch, getState) => {
  const result = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(getState().editPainting)
  })
    .then(res => {
      //console.log("res in AC", res)
      return res.json()
    })
    .catch(err => console.log(err))

  if (result.ok) {
    dispatch({ type: EDIT_PAINTING_SAVE_SUCCEEDED })
    await dispatch(getPaintings)
    history.push("/admin/paintings")
  } else {
    window.alert("error occurred while updating")
  }
}
