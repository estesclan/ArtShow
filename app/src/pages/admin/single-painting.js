import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"
import { EDIT_PAINTING_LOADED, EDIT_PAINTING_UPDATED } from "../../constants"
import { editPainting } from "../../action-creators/paintings"

import { find, head } from "ramda"

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 160
  }
})

class EditPainting extends React.Component {
  state = {
    open: false
  }
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  componentDidMount() {
    const { paintings, loadPaintingForEdit } = this.props
    const currentPainting = find(
      p => p._id === this.props.match.params.id,
      paintings
    )
    loadPaintingForEdit(currentPainting)
  }

  render() {
    const {
      classes,
      singlePainting,
      onSelectButton,
      history,
      onEditSubmit
    } = this.props

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1
        }}
        className="white vh-100 ph3"
      >
        <h1>{singlePainting.name}</h1>
        <img
          className="shadow-3"
          src={`/jpeg-paintings/${singlePainting.jpegData}.jpg`}
          alt="Representation of a colorful painting"
        />
        <div
          style={{
            marginTop: 85,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <form onSubmit={onEditSubmit(history)}>
            <FormControl className={classes.formControl}>
              <InputLabel>Change Painting Type</InputLabel>
              <Select
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={head(singlePainting.paintingType)}
                onChange={e => onSelectButton(e.target.value)}
              >
                <MenuItem value="original">Original Available</MenuItem>
                <MenuItem value="reproduction">Original Sold</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    paintings: state.paintings,
    singlePainting: state.editPainting
  }
}
const mapActionToProps = dispatch => ({
  loadPaintingForEdit: painting =>
    dispatch({ type: EDIT_PAINTING_LOADED, payload: painting }),
  onSelectButton: value =>
    value === "original"
      ? dispatch({
          type: EDIT_PAINTING_UPDATED,
          payload: { paintingType: ["original", "reproduction"] }
        })
      : dispatch({
          type: EDIT_PAINTING_UPDATED,
          payload: { paintingType: ["reproduction"] }
        }),
  onEditSubmit: history => e => {
    e.preventDefault()
    dispatch(editPainting(history))
  }
})
const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(withStyles(styles)(EditPainting))
