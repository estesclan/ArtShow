import React from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"

const Home = props => {
  const { Homepaintings } = props
  console.log(props)
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
      className="white vh-100"
    >
      <Typography gutterBottom variant="headline">
        There's no place like home: {props.Homepaintings}
      </Typography>
      <img
        alt="Elvis DOES Rock this velvet painting!"
        src="/jpeg-paintings/carousel-jpegs/Den.jpg"
      />
      <Typography component="p">(or is there?) 0_0</Typography>
    </div>
  )
}

const mapStateToProps = state => ({
  Homepaintings: state.carouselPaintings
})

const connector = connect(mapStateToProps)

export default connector(Home)
