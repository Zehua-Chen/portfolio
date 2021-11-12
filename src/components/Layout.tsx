import { PropsWithChildren, Fragment } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import theme from "../theme";

function NavLink({ title, to }: { title: string; to: string }) {
  return (
    <Button
      css={(theme) => css`
        color: ${theme.palette.primary.contrastText};
        padding-left: ${theme.spacing(2)},
        padding-right: ${theme.spacing(2)},
      `}
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
  return (
    <div
      css={(theme) => css`
        flex-grow: 0;
        background: ${theme.palette.background.paper};
      `}
    >
      <Divider />
      <Container
        css={(theme) => css`
          paddingtop: ${theme.spacing(2)};
        `}
        maxWidth="md"
      >
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
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div>
          <AppBar
            css={css`
              flex-grow: 0;
            `}
            elevation={0}
            position="sticky"
          >
            <Toolbar>
              <NavLink title="Home" to="/" />
              <NavLink title="About Me" to="/aboutme" />
              <NavLink title="Projects" to="/projects" />
            </Toolbar>
          </AppBar>
          <div
            css={(theme) => css`
              flex-grow: 1;
              padding-bottom: ${theme.spacing(2)};
              background: ${theme.palette.background.default};
            `}
          >
            {props.children}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default Layout;
