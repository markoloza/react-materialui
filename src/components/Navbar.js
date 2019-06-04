import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  }
};

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
}));

function Navbar(props) {
  const classes = useStyles();

  console.log(props)

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Hacker News
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink to="/">
              <Button
                classes={{
                  root: props.classes.root,
                  label: props.classes.label
                }}
                color="inherit"
              >
                <Typography>News</Typography>
              </Button>
            </NavLink>
            <NavLink to="weather">
              <Button
                classes={{
                  root: props.classes.root,
                  label: props.classes.label
                }}
                color="inherit"
              >
                <Typography>Weather</Typography>
              </Button>
            </NavLink>
            <NavLink to="/blog">
              <Button
                classes={{
                  root: props.classes.root,
                  label: props.classes.label
                }}
                color="inherit"
              >
                <Typography>Blog</Typography>
              </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
