import React from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"

const Home = props => {
  const { Homepaintings } = props
  console.log(props)
  return (
    <React.Fragment>
      <Typography gutterBottom variant="headline">
        There's no place like home: {props.Homepaintings}
      </Typography>
      <img
        alt="Elvis DOES Rock this velvet painting!"
        src="https://cdn.shopify.com/s/files/1/1083/5516/products/A111_2_400x400.jpg?v=1459492496"
      />
      <Typography component="p">(or is there?) 0_0</Typography>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  Homepaintings: state.carouselPaintings
})

const connector = connect(mapStateToProps)

export default connector(Home)
