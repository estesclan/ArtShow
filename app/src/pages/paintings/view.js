import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"

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
  const { currentPainting } = props
  console.log("props.match.params", props.match.params)
  console.log(currentPainting)
  return (
    <h1>
      Here's the dang name: {currentPainting.name}
      "{props.match.params.id}"
    </h1>
  )
}

const mapStateToProps = state => {
  return {
    currentPainting: state.paintings
  }
}
const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(ViewPainting))
