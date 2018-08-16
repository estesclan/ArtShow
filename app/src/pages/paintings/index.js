import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"

import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import List from "@material-ui/core/List"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import filterOptionsHelper from "../../lib/filterOptions-helper"
import { map, propOr } from "ramda"
import ASinglePaintingCard from "../../components/card"

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}

const li = painting => (
  <ASinglePaintingCard key={painting.name} foo={painting} ted={9} />
)

const ListPaintings = props => {
  const { allPaintings, filterOptions } = props

  return (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom variant="headline">
          Here's Some Paintings:
        </Typography>
        <ul>{map(li, filterOptionsHelper(allPaintings, filterOptions))}</ul>
      </CardContent>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  allPaintings: state.paintings,
  filterOptions: state.filterOptions
})

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(ListPaintings))
