import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import Helmet from "react-helmet";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Octicon, { MarkGithub } from "@githubprimer/octicons-react";
import Layout from "../components/Layout";
import ProfileImage from "../components/ProfileImage";

function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
        css={(theme) => css`
          background: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrastText};
        `}
      >
        <div
          css={css`
            padding-top: 70px;
            padding-bottom: 50px;
          `}
        >
          <Grid container justifyContent="center">
            <Avatar
              css={(theme) => css`
                width: 170px;
                height: 170px;
                margin-bottom: theme.spacing(3);
                border: "solid ${theme.palette.background.paper}";
                border-width: 4px;
              `}
            >
              <ProfileImage />
            </Avatar>
          </Grid>
          <Typography variant="h3" color="inherit" align="center">
            I am Zehua Chen!
          </Typography>
        </div>
      </div>
      <Container maxWidth="md">
        <Typography
          css={css`
            padding-top: 10px;
          `}
          variant="h6"
          color="inherit"
        >
          I am an undergrad at the University of Illinois at Urbana Champaign
          majoring in CS + LING. I enjoy writing code and I am always looking
          forward to learn to use new technologies.
        </Typography>
        {/* External links */}
        <Grid
          css={css`
            padding-top: 20px;
            text-align: "center";
          `}
          container
          spacing={2}
        >
          <Grid item xs={6}>
            <Button
              css={css`
                width: "100%";
              `}
              variant="text"
              color="primary"
              component={Link}
              to="/aboutme"
            >
              Learn More
              <ArrowForwardIcon
                css={(theme) => css`
                  margin-left: ${theme.spacing()}px;
                `}
              />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              css={css`
                width: "100%";
              `}
              variant="text"
              color="primary"
              component={"a"}
              href="https://github.com/Zehua-Chen/"
            >
              Github
              <span
                css={(theme) => css`
                  margin-left: ${theme.spacing()};
                `}
              >
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
