import { HTMLProps } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export interface ProjectCardProps extends HTMLProps<HTMLDivElement> {
  // project: Project;
  title: string;
  role: string;
  overview: string;
  image?: string;
  learnMore?: string;
  repo?: string;
}

/**
 * Display a project using a card
 */
function ProjectCard(props: ProjectCardProps) {
  const { title, role, image, learnMore, repo, overview, ...others } = props;

  return (
    <div
      css={(theme) => css`
        // Height and width
        height: "100%";
        // Flex
        display: "flex";
        flexDirection: "column";
        // Color
        background-color: ${theme.palette.background.paper};
        // border
        border: "1px solid ${theme.palette.grey[300]}"",
        border-radius: theme.shape.borderRadius;
      `}
      {...others}
    >
      {!image ? null : <CardMedia image={image}></CardMedia>}
      {/* project titles, fixed size */}
      <CardContent
        css={(theme) => css`
          padding-bottom: ${theme.spacing()};
        `}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2">{role}</Typography>
      </CardContent>
      {/* project descriptions, automatic take up all reamining sizes */}
      <CardContent
        css={css`
          flex-grow: 1;
          padding-top: 0;
          height: "auto";
          overflowy: "auto";
        `}
      >
        {overview}
      </CardContent>
      {/* card actions, fixed size */}
      <CardActions
        css={css`
          flex-shrink: 0;
        `}
      >
        {!learnMore ? null : (
          <Button size="small" color="primary" component={Link} to={learnMore}>
            Learn More
          </Button>
        )}
        {!repo ? null : (
          <Button size="small" color="secondary" component={"a"} href={repo}>
            Repo
          </Button>
        )}
      </CardActions>
    </div>
  );
}

ProjectCard.defaultProps = {
  height: 250,
};

export default ProjectCard;
