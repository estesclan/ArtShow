import React from "react"
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Switch from "@material-ui/core/Switch"
import { connect } from "react-redux"
import { FILTERED_PAINTING_PAINTING_SIZE_CHECKED } from "../../constants"

const FilterPaintings = props => {
  const { handleSizeChanged, small, medium, large } = props

  console.log({ handleSizeChanged, small, medium, large })

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose your size:</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={small}
              onChange={handleSizeChanged("18x24")}
              value="18x24"
            />
          }
          label="18x24"
        />
        <FormControlLabel
          control={
            <Switch
              checked={medium}
              onChange={handleSizeChanged("24x36")}
              value="24x36"
            />
          }
          label="24x36"
        />
        <FormControlLabel
          control={
            <Switch
              checked={large}
              onChange={handleSizeChanged("32x48")}
              value="32x48"
            />
          }
          label="32x48"
        />
      </FormGroup>
      <FormHelperText>MOOD</FormHelperText>
    </FormControl>
  )
}

const mapStateToProps = state => {
  return {
    small: state.filterOptions.size === "18x24" ? true : false,
    medium: state.filterOptions.size === "24x36" ? true : false,
    large: state.filterOptions.size === "32x48" ? true : false
  }
}

const mapActionsToProps = dispatch => {
  return {
    handleSizeChanged: size => event => {
      dispatch({ type: FILTERED_PAINTING_PAINTING_SIZE_CHECKED, payload: size })
      //this.setState({ [size]: event.target.checked })
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(FilterPaintings)
