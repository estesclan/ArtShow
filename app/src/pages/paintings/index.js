import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import filterOptionsHelper from "../../lib/filterOptions-helper"
import { map } from "ramda"
import ASinglePaintingCard from "../../components/card"

const styles = {
  card: {
    // maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}

const li = painting => (
  <ASinglePaintingCard key={painting.name} painting={painting} ted={9} />
)

const ListPaintings = props => {
  const { allPaintings, filterOptions } = props

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "gray"
      }}
    >
      <CardContent>
        <h2
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          Your List of Paintings:
        </h2>
        <ul>{map(li, filterOptionsHelper(allPaintings, filterOptions))}</ul>
      </CardContent>
    </div>
  )
}

const mapStateToProps = state => ({
  allPaintings: state.paintings,
  filterOptions: state.filterOptions
})

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(ListPaintings))
