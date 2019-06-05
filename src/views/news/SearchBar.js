import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "40px auto"
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color: "#FF6601",
  },
  iconButton: {
    padding: 10,
    color: "#FF6601",
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
    backgroundColor: "#FF6601",
  },
});

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search News..."
        inputProps={{ "aria-label": "Search Google Maps" }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="Directions"
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
