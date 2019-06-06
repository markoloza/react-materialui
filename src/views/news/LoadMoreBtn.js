import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    marginTop: 20,
    marginBottom: 20
  },
  button: {
      color: "#fff",
      background: "#FF6601",
  }
}));

const LoadMoreBtn = () => {
  const classes = useStyles();

  return (
    <Box color="text.primary" className={classes.root} clone>
      <Button variant="contained" className={classes.button}>
        Load more stories
      </Button>
    </Box>
  );
};

export default LoadMoreBtn;
