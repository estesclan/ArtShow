import React from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import withDrawer from "../components/withDrawer"
import MenuAppBar from "../components/menuAppBar"

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
      className="vh-100"
    >
      <MenuAppBar title="ArtShow" />

      <img
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "200rem",
          //width: "auto",
          marginTop: 80

          //width: "200%"
          //flexGrow: 1,
          //backgroundColor: "gray"
        }}
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

export default withDrawer(connector(Home))
