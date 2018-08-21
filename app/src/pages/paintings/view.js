import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import { find } from "ramda"

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}

const ViewPainting = props => {
  const { paintings } = props

  const currentPainting = find(p => p._id === props.match.params.id, paintings)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor: "gray"
      }}
      className="white vh-100 ph3"
    >
      <h1>{currentPainting.name}</h1>
      <img
        className="shadow-3"
        src={`/jpeg-paintings/${currentPainting.jpegData}.jpg`}
      />
      <p>Acrylic on canvas with palette knife.</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    paintings: state.paintings
  }
}
const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(ViewPainting))
