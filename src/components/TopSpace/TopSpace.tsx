import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      height: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles);

function TopSpace() {
  const classes = useStyles();
  return <div className={classes.container}></div>;
}

export default TopSpace;
