import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { map, propOr } from "ramda"
const li = painting => <li>{painting.name}</li>

const ListPaintings = props => {
  const { allPaintings } = props
  console.log(props)
  return (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom variant="headline">
          Here's Some Paintings:
        </Typography>

        <ul>{map(li, propOr([], "allPaintings", props))}</ul>
        <img
          alt="Elvis DOES Rock this velvet painting!"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xJf7kJVyVB1SADxaZwtmKw61zYdfPZ4hdE4bBW3M_bXC3Jqi"
        />
        <Typography component="p">...what an awesome painting :/</Typography>
      </CardContent>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  allPaintings: state.paintings
})

const connector = connect(mapStateToProps)

export default connector(ListPaintings)
