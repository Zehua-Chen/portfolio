import React, { PropsWithChildren, Fragment } from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  MuiThemeProvider,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import CssBaseline from "./CssBaseline";
import theme from "../theme";

const styles = (theme: Theme) =>
  createStyles({
    container: {
    },
    body: {
      flexGrow: 1,
      paddingBottom: theme.spacing(2),
      background: theme.palette.background.default,
    },
    navbar: {
      flexGrow: 0,
    },
    footer: {
      flexGrow: 0,
      background: theme.palette.background.paper,
    },
    footerContent: {
      paddingTop: theme.spacing(2),
    },
    link: {
      color: theme.palette.primary.contrastText,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles);

function NavLink({ title, to }: { title: string; to: string }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.link}
      size="large"
      color="primary"
      variant="text"
      component={Link}
      to={to}
    >
      {title}
    </Button>
  );
}

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Divider />
      <Container className={classes.footerContent} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Contacts</Typography>
            <Typography variant="subtitle2">zehuac2@illinois.edu</Typography>
            <Typography variant="subtitle2">+1 217 904 9389</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Connect</Typography>
            <div>
              <Typography
                variant="subtitle2"
                component="a"
                href="https://www.linkedin.com/in/zehua-chen-fall-2017/"
              >
                Linkedin
              </Typography>
            </div>
            <div>
              <Typography
                variant="subtitle2"
                component="a"
                href="https://www.facebook.com/profile.php?id=100009187015242"
              >
                Facebook
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function Layout(props: PropsWithChildren<{}>) {
  const classes = useStyles();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <meta property="og:title" content="Zehua Chen"></meta>
        <meta property="twitter:title" content="Zehua Chen"></meta>
        <meta
          property="og:description"
          content="Zehua Chen's Personal Homepage"
        ></meta>
        <meta
          property="twitter:description"
          content="Zehua Chen's Personal Homepage"
        ></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className={classes.container}>
          <AppBar className={classes.navbar} elevation={0} position="sticky">
            <Toolbar>
              <NavLink title="Home" to="/" />
              <NavLink title="About Me" to="/aboutme" />
              <NavLink title="Projects" to="/projects" />
            </Toolbar>
          </AppBar>
          <div className={classes.body}>{props.children}</div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default Layout;
