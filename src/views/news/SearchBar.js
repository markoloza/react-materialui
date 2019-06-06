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
    width: 400,
    margin: "40px auto"
  },
  form: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color: "#FF6601"
  },
  iconButton: {
    padding: 10,
    color: "#FF6601"
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
    backgroundColor: "#FF6601"
  }
});

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const { value, onChange, onSubmit } = props;

  return (
    <Paper className={classes.root}>
      <form onSubmit={onSubmit} className={classes.form}>
        <InputBase
          value={value}
          onChange={onChange}
          className={classes.input}
          placeholder="Search News..."
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
      </form>
    </Paper>
  );
}
