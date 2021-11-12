import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";

// const styles = (theme: Theme) =>
//   createStyles({
//     titleSection: {
//       background: theme.palette.primary.main,
//       height: 260,
//     },
//     title: {
//       paddingTop: 75,
//       textAlign: "center",
//       color: theme.palette.primary.contrastText,
//     },
//     role: {
//       // paddingTop: theme.spacing(1),
//       textAlign: "center",
//       color: theme.palette.primary.contrastText,
//     },
//     date: {
//       textAlign: "center",
//       color: theme.palette.primary.contrastText,
//     },
//     repo: {
//       display: "block",
//       textAlign: "center",
//       color: theme.palette.primary.contrastText,
//     },
//     content: {
//       "& > h1": {
//         ...theme.typography.h4,
//       },
//       "& > h2": {
//         ...theme.typography.h5,
//       },
//       "& > h3": {
//         ...theme.typography.h6,
//       },
//       "& > p": {
//         ...theme.typography.body1,
//       },
//       "& > ul": {
//         fontSize: theme.typography.body1.fontSize,
//       },
//       "& > ol": {
//         fontSize: theme.typography.body1.fontSize,
//       },
//     },
//   });
// const useStyles = makeStyles(styles);

function ProjectTemplate(props: any) {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div
        css={(theme) => css`
          background: ${theme.palette.primary.main};
          height: 260;
        `}
      >
        <Typography
          css={(theme) => css`
            padding-top: 75;
            text-align: "center";
            color: ${theme.palette.primary.contrastText};
          `}
          variant="h4"
        >
          {frontmatter.title}
        </Typography>
        {!frontmatter.role ? null : (
          <Typography
            css={(theme) => css`
              text-align: "center";
              color: ${theme.palette.primary.contrastText};
            `}
            variant="subtitle1"
          >
            {frontmatter.role}
          </Typography>
        )}
        {!frontmatter.start_date ? null : (
          <Typography
            css={(theme) => css`
              text-align: "center";
              color: ${theme.palette.primary.contrastText};
            `}
            variant="subtitle2"
          >
            {frontmatter.start_date} - {frontmatter.end_date}
          </Typography>
        )}
        {!frontmatter.repo ? null : (
          <Typography
            css={(theme) => css`
              display: "block",
              text-align: "center",
              color: ${theme.palette.primary.contrastText},
            `}
            variant="subtitle2"
            component={"a"}
            href={frontmatter.repo}
          >
            {frontmatter.repo}
          </Typography>
        )}
      </div>
      <Container maxWidth="md">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        role
        repo
        start_date
        end_date
      }
    }
  }
`;

export default ProjectTemplate;
