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
  <li>
    <ASinglePaintingCard />
  </li>
)

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
        {/*<List>{map(resource => ResourceListItem(resource), props.resources)}</List>
        
        <List>{map(painting => ASinglePaintingCard(painting), props)}</List>
        */}
      </CardContent>
      <ASinglePaintingCard />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  allPaintings: state.paintings
})

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(ListPaintings))
