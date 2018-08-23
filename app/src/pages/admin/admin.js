import React from "react"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import withDrawer from "../../components/withDrawer"
import MenuAppBar from "../../components/menuAppBar"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const Admin = props => {
  const { classes } = props

  return (
    <div>
      <MenuAppBar title="ArtShow" />
      <div
        style={{
          marginTop: 85,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Link
          to="/admin/paintings"
          className="router-link"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
          >
            Edit a painting
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default withDrawer(withStyles(styles)(Admin))
