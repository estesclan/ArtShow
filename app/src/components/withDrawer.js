import React from "react"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import DraftsIcon from "@material-ui/icons/Drafts"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { DRAWER_TOGGLED } from "../constants"
import { CameraEnhance } from "@material-ui/icons"

const VeteranListItems = (
  <div>
    <Link to="/" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link to="/paintings" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
    </Link>

    {/* <Link to="/resources" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItem>
    </Link>
    <Link to="/events/new" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Add Event" />
      </ListItem>
    </Link>
    <Link to="/categories/new" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <CameraEnhance />
        </ListItemIcon>
        <ListItemText primary="Add Category" />
      </ListItem>
    </Link> */}
  </div>
)

const withDrawer = function(PageComponent) {
  const WrappedDrawerPageComponent = props => {
    return (
      <div>
        <PageComponent {...props} />
        <Drawer open={props.open} onClose={props.toggleDrawer(props.open)}>
          <div tabIndex={0} role="button">
            {VeteranListItems}
          </div>
        </Drawer>
      </div>
    )
  }

  const mapStateToProps = state => {
    return { open: state.drawer.open }
  }
  const mapActionsToProps = dispatch => {
    return {
      toggleDrawer: open => () => {
        if (open) {
          //console.log("The drawer onClose FIRED!!!")
          dispatch({ type: DRAWER_TOGGLED })
        }
      }
    }
  }

  const connector = connect(
    mapStateToProps,
    mapActionsToProps
  )

  return connector(WrappedDrawerPageComponent)
}

export default withDrawer
