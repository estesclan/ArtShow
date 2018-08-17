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
  //console.log("props.match.params", props.match.params)
  //console.log(currentPainting)
  return (
    <div>
      <h1>{currentPainting.name}</h1>
      <img src={`/jpeg-paintings/${currentPainting.jpegData}.jpg`} />
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
