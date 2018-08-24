import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import { find } from "ramda"
import withDrawer from "../../components/withDrawer"
import MenuAppBar from "../../components/menuAppBar"

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
    <div>
      <MenuAppBar title="Your Selected Painting" />

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
        <h1>{currentPainting.name}</h1>
        <img
          className="shadow-3"
          src={`/jpeg-paintings/${currentPainting.jpegData}.jpg`}
          alt="Representation of a colorful painting"
        />
        <p style={{ textAlign: "center" }}>
          Acrylic on canvas with palette knife in heavy impasto. <br />
          Peter’s distinctive "Vibrant Impressionism" style evokes warm
          feelings, rather than telling a story…
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    paintings: state.paintings
  }
}
const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(ViewPainting)))
