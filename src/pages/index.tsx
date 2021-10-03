import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Octicon, { MarkGithub } from "@githubprimer/octicons-react";
import Layout from "../components/Layout";
import ProfileImage from "../components/ProfileImage";

const styles = (theme: Theme) =>
  createStyles({
    name: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    nameContent: {
      paddingTop: 70,
      paddingBottom: 50,
    },
    avatar: {
      width: 170,
      height: 170,
      marginBottom: theme.spacing(3),
      border: `solid ${theme.palette.background.paper}`,
      borderWidth: 4,
    },
    shortBio: {
      paddingTop: 10,
    },
    bioLearnMore: {
      paddingTop: 20,
      textAlign: "center",
    },
    bioLearnMoreButton: {
      width: "100%",
    },
    bioLearnMoreButtonIcon: {
      marginLeft: theme.spacing(),
    },
  });

const useStyles = makeStyles(styles);

function Index() {
  const classes = useStyles();

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={classes.name}>
        <div className={classes.nameContent}>
          <Grid container justify="center">
            <Avatar className={classes.avatar}>
              <ProfileImage />
            </Avatar>
          </Grid>
          <Typography variant="h3" color="inherit" align="center">
            I am Zehua Chen!
          </Typography>
        </div>
      </div>
      <Container maxWidth="md">
        <Typography className={classes.shortBio} variant="h6" color="inherit">
          I am an undergrad at the University of Illinois at Urbana Champaign
          majoring in CS + LING. I enjoy writing code and I am always looking
          forward to learn to use new technologies.
        </Typography>
        {/* External links */}
        <Grid container spacing={2} className={classes.bioLearnMore}>
          <Grid item xs={6}>
            <Button
              className={classes.bioLearnMoreButton}
              variant="text"
              color="primary"
              component={Link}
              to="/aboutme"
            >
              Learn More
              <ArrowForwardIcon className={classes.bioLearnMoreButtonIcon} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={classes.bioLearnMoreButton}
              variant="text"
              color="primary"
              component={"a"}
              href="https://github.com/Zehua-Chen/"
            >
              Github
              <span className={classes.bioLearnMoreButtonIcon}>
                <Octicon icon={MarkGithub} />
              </span>
            </Button>
          </Grid>
          {/* <Grid item xs={4}> */}
          {/* TODO: Update Resume Link before launch! */}
          {/* <Button
              className={classes.bioLearnMoreButton}
              variant="text"
              color="primary"
              component={Link}
              to="/aboutme"
            >
              Resume
              <CloudIcon className={classes.bioLearnMoreButtonIcon} />
            </Button> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Index;
