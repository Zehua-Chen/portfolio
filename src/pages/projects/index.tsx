import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Layout from "../../components/Layout";
import TopBar from "../../components/TopSpace";
import ProjectCard from "../../components/ProjectCard";

const query = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___start_date] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            role
            repo
            overview
          }
        }
      }
    }
  }
`;

function Projects() {
  return (
    <Layout>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <TopBar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <StaticQuery query={query}>
            {(data) => {
              return data.allMarkdownRemark.edges.map(
                (edge: any, index: number) => {
                  let frontmatter = edge.node.frontmatter;

                  return (
                    <Grid item key={index} xs={6} sm={4} md={3}>
                      <ProjectCard
                        title={frontmatter.title}
                        role={frontmatter.role}
                        overview={frontmatter.overview}
                        learnMore={frontmatter.slug}
                        repo={frontmatter.repo}
                      ></ProjectCard>
                    </Grid>
                  );
                }
              );
            }}
          </StaticQuery>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Projects;
