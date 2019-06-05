import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "20px"
  }
}));

const NewsItem = props => {
  
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h6" component="h3">
          {props.listItem.title}
        </Typography>
        <Typography component="p">{props.listItem.url}</Typography>
      </Paper>
    </>
  );
};

export default NewsItem;
