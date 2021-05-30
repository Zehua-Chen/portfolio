import React, { HTMLProps } from "react";
import { Link } from "gatsby";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export interface ProjectCardProps extends HTMLProps<HTMLDivElement> {
  // project: Project;
  title: string;
  role: string;
  overview: string;
  image?: string;
  learnMore?: string;
  repo?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    card: (props: ProjectCardProps) => ({
      // Height and width
      height: "100%",
      // Flex
      display: "flex",
      flexDirection: "column",
      // Color
      backgroundColor: theme.palette.background.paper,
      // border
      border: `1px solid ${theme.palette.grey[300]}`,
      borderRadius: theme.shape.borderRadius,
    }),
    cardTitle: {
      paddingBottom: theme.spacing(),
    },
    cardDescription: {
      flexGrow: 1,
      paddingTop: 0,
      height: "auto",
      overflowY: "auto",
    },
    cardActions: {
      flexShrink: 0,
    },
  });

const useStyles = makeStyles(styles);

/**
 * Display a project using a card
 */
function ProjectCard(props: ProjectCardProps) {
  const classes = useStyles(props);
  const { title, role, image, learnMore, repo, overview, ...others } = props;

  return (
    <div className={classes.card} {...others}>
      {!image ? null : <CardMedia image={image}></CardMedia>}
      {/* project titles, fixed size */}
      <CardContent className={classes.cardTitle}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2">{role}</Typography>
      </CardContent>
      {/* project descriptions, automatic take up all reamining sizes */}
      <CardContent className={classes.cardDescription}>{overview}</CardContent>
      {/* card actions, fixed size */}
      <CardActions className={classes.cardActions}>
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
