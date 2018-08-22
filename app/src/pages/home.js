import React from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import withDrawer from "../components/withDrawer"
import MenuAppBar from "../components/menuAppBar"
import Carousel from "react-image-carousel"
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const Home = props => {
  const { classes } = props
  const images = [
    "/jpeg-paintings/carousel-jpegs/Bedroom.jpg",
    "/jpeg-paintings/carousel-jpegs/Charleston-Harbor-Sunset2.jpg",
    "/jpeg-paintings/carousel-jpegs/Church-Street-by-Night2.jpg",
    "/jpeg-paintings/carousel-jpegs/Colorful-Room.jpg",
    "/jpeg-paintings/carousel-jpegs/Den.jpg"
    //"/jpeg-paintings/carousel-jpegs/Strike-Indigo-Wall.jpg"
  ]
  console.log(props)
  return (
    <div>
      <MenuAppBar title="ArtShow" />
      <div style={{ marginTop: 120 }}>
        <Carousel images={images} thumb={true} loop={true} autoplay={3000} />
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Link
          to="/paintings/filter"
          className="router-link"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
          >
            Enter Site
          </Button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  Homepaintings: state.carouselPaintings
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Home)))
