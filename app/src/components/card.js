import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 0,
    paddingTop: "80%"
  }
}

const ASinglePaintingCard = props => {
  const { classes, painting } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/jpeg-paintings/Blue-Harbor.jpg" //painting.jpegData
          title="Porgy and Bess Picnic"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {/*{painting.name}*/} A Mood Painting!
          </Typography>
          <Typography component="p">
            Words about paintings to make you feel like this is an awesome
            painting.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

ASinglePaintingCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ASinglePaintingCard)
