import React from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"

const Home = props => {
  const { Homepaintings } = props
  console.log(props)
  return (
    <center display="flex" align-items="center" justify-content="center">
      <React.Fragment>
        <Typography gutterBottom variant="headline">
          There's no place like home: {props.Homepaintings}
        </Typography>
        <img
          alt="Elvis DOES Rock this velvet painting!"
          src="/jpeg-paintings/carousel-jpegs/Den.jpg"
        />
        <Typography component="p">(or is there?) 0_0</Typography>
      </React.Fragment>
    </center>
  )
}

const mapStateToProps = state => ({
  Homepaintings: state.carouselPaintings
})

const connector = connect(mapStateToProps)

export default connector(Home)
