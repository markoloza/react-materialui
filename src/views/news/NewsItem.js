import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    marginTop: 20
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    fontSize: 12
  },
  chip: {
    height: 20,
    fontSize: "12px",
    margin: theme.spacing(1)
  }
}));

const NewsItem = props => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Typography>{props.listItem.title}</Typography>
        <Chip
          label={props.listItem.created_at}
          className={classes.chip}
          component="p"
        />
        <Chip
          label={props.listItem.author}
          className={classes.chip}
          component="p"
        />
        {props.listItem.url && (
          <Chip
            label={props.listItem.url}
            className={classes.chip}
            component="a"
            href={props.listItem.url}
            clickable
          />
        )}
      </Paper>
    </>
  );
};

export default NewsItem;
