import React, { PropsWithChildren } from "react";
import clsx from "classnames";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    heading: {
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
    },
  });

const useStyles = makeStyles(styles);

function TextHeading(
  props: PropsWithChildren<Omit<TypographyProps, "variant">>
) {
  const { children, className, ...others } = props;
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.heading, className)}
      variant="h5"
      {...others}
    >
      {children}
    </Typography>
  );
}

export default TextHeading;
