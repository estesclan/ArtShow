import React from "react"
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Switch from "@material-ui/core/Switch"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { contains } from "ramda"
import {
  FILTERED_PAINTING_PAINTING_SIZE_CHECKED,
  FILTERED_PAINTING_PAINTING_SUBJECT_CHECKED,
  FILTERED_PAINTING_PAINTING_TYPE_CHECKED
} from "../../constants"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const FilterPaintings = props => {
  const {
    classes,
    withStyles,
    handleSizeChanged,
    small,
    medium,
    large,
    handleSubjectChanged,
    sunsets,
    cityscapes,
    wildlife,
    water,
    boats,
    people,
    nightScenes,
    dayScenes,
    handleTypeChanged,
    original,
    reproduction
  } = props

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        backgroundColor: "gray"
      }}
    >
      <div
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          padding: 25
        }}
      >
        <FormControl component="fieldset">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FormLabel component="legend">Choose your size:</FormLabel>
          </div>
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
      </div>
      {/*/////////////////////////////////////*/}
      <div
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          padding: 25
        }}
      >
        <FormControl component="fieldset">
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <FormLabel component="legend">
              Choose your subject matter:
            </FormLabel>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={sunsets}
                  onChange={handleSubjectChanged("sunsets")}
                  value="sunsets"
                />
              }
              label="Sunsets"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={cityscapes}
                  onChange={handleSubjectChanged("cityscapes")}
                  value="cityscapes"
                />
              }
              label="Cityscapes"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={wildlife}
                  onChange={handleSubjectChanged("wildlife")}
                  value="wildlife"
                />
              }
              label="Wildlife"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={water}
                  onChange={handleSubjectChanged("water")}
                  value="water"
                />
              }
              label="Water"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={boats}
                  onChange={handleSubjectChanged("boats")}
                  value="boats"
                />
              }
              label="Boats"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={people}
                  onChange={handleSubjectChanged("people")}
                  value="people"
                />
              }
              label="People"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={nightScenes}
                  onChange={handleSubjectChanged("nightScenes")}
                  value="nightScenes"
                />
              }
              label="Night Scenes"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={dayScenes}
                  onChange={handleSubjectChanged("dayScenes")}
                  value="dayScenes"
                />
              }
              label="Day Scenes"
            />
          </FormGroup>

          <FormHelperText>MORE MOOD</FormHelperText>
        </FormControl>
      </div>
      {/*/////////////////////////////////////*/}

      <div
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          padding: 25
        }}
      >
        <FormControl component="fieldset">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FormLabel component="legend">Choose your type:</FormLabel>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={original}
                  onChange={handleTypeChanged("original")}
                  value="original"
                />
              }
              label="Original"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={reproduction}
                  onChange={handleTypeChanged("reproduction")}
                  value="reproduction"
                />
              }
              label="Reproduction"
            />
          </FormGroup>
          <FormHelperText>EVEN MORE MOOD!</FormHelperText>
        </FormControl>
      </div>
      <div>
        <Link
          to="/paintings"
          className="router-link"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    small: contains("18x24", state.filterOptions.size),
    medium: contains("24x36", state.filterOptions.size),
    large: contains("32x48", state.filterOptions.size),
    size: state.filterOptions.size,
    filterOptions: state.filterOptions,
    sunsets: contains("sunsets", state.filterOptions.subject),
    cityscapes: contains("cityscapes", state.filterOptions.subject),
    wildlife: contains("wildlife", state.filterOptions.subject),
    water: contains("water", state.filterOptions.subject),
    boats: contains("boats", state.filterOptions.subject),
    people: contains("people", state.filterOptions.subject),
    nightScenes: contains("nightScenes", state.filterOptions.subject),
    dayscenes: contains("cityscapes", state.filterOptions.subject),
    subject: state.filterOptions.subject,
    original: contains("original", state.filterOptions.paintingType),
    reproduction: contains("reproduction", state.filterOptions.paintingType),
    paintingType: state.filterOptions.paintingType
  }
}

const mapActionsToProps = dispatch => {
  return {
    handleSizeChanged: size => event => {
      dispatch({ type: FILTERED_PAINTING_PAINTING_SIZE_CHECKED, payload: size })
      //this.setState({ [size]: event.target.checked })
    },
    handleSubjectChanged: subject => event => {
      dispatch({
        type: FILTERED_PAINTING_PAINTING_SUBJECT_CHECKED,
        payload: subject
      })
    },
    handleTypeChanged: paintingType => event => {
      dispatch({
        type: FILTERED_PAINTING_PAINTING_TYPE_CHECKED,
        payload: paintingType
      })
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(FilterPaintings))
