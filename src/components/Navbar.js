import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appbar: {
    background: "#FF6601"
  },
  root: {
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  },
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
  typography: {
    textDecoration: "none",
    fontWeight: "600",
    color: "#fff"
  },
  links: {
    textDecoration: "none"
  }
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar className={classes.appbar} position="fixed" color="default">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Hacker News
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink className={classes.links} to="/">
              <Button className={classes.root} color="inherit">
                <Typography className={classes.typography} variant="button">
                  News
                </Typography>
              </Button>
            </NavLink>

            <NavLink className={classes.links} to="weather">
              <Button className={classes.root} color="inherit">
                <Typography className={classes.typography} variant="button">
                  Weather
                </Typography>
              </Button>
            </NavLink>

            <NavLink className={classes.links} to="/blog">
              <Button className={classes.root} color="inherit">
                <Typography className={classes.typography} variant="button">
                  Blog
                </Typography>
              </Button>
            </NavLink>

            <NavLink className={classes.links} to="/login">
              <Button className={classes.root} color="inherit">
                <Typography className={classes.typography} variant="button">
                  Login
                </Typography>
              </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
