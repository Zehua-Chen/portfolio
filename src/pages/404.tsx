import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";
import Layout from "../components/Layout";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      fontSize: 40,
      marginBottom: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles);

function NotFoundPage() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <ErrorIcon className={classes.icon} />
        <Typography>Page Not Found!</Typography>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
