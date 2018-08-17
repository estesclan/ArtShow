import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import { pathOr } from "ramda"

const styles = {
  card: {
    width: "100%",
    maxWidth: 500,
    marginTop: "20px"
  },
  media: {
    height: 0,
    paddingTop: "80%"
  }
}

const ASinglePaintingCard = props => {
  const { classes } = props

  const name = pathOr("", ["painting", "name"], props)
  const id = pathOr("", ["painting", "_id"], props)

  const jpegData = pathOr("", ["painting", "jpegData"], props)
  const styleHeight = pathOr(10, ["painting", "styleHeight"], props)
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          style={{ height: styleHeight }}
          image={`/jpeg-paintings/${jpegData}.jpg`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            Words about paintings to make you feel like this is an awesome
            painting.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={`/paintings/${id}/view`}
            className="router-link"
            style={{ textDecoration: "none" }}
          >
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

ASinglePaintingCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ASinglePaintingCard)
