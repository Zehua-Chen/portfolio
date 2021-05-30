import React, { PropsWithChildren, HTMLProps } from "react";
import clsx from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface HorizontalListProps extends HTMLProps<HTMLUListElement> {
  height?: number;
}

const styles = (theme: Theme) =>
  createStyles({
    list: {
      // Set background color
      // backgroundColor: theme.palette.grey[300],
      // Border color
      // borderTop: `1px solid ${theme.palette.grey[600]}`,
      // borderBottom: `1px solid ${theme.palette.grey[600]}`,
      // Disable bullet list
      listStyle: "none",
      // Scroll horizontal
      scrollDirection: "horizontal",
      overflowX: "scroll",
      overflowY: "hidden",
      // Disable wrapping, otherwise overflowed item will go to next line
      // rather than overflow horizontally
      whiteSpace: "nowrap",
      // Padding
      paddingTop: "15px",
      paddingBottom: "15px",
    },
  });

const useStyles = makeStyles(styles);

function HorizontalList(
  props: PropsWithChildren<HorizontalListProps> = { height: 300 }
) {
  const { children, height, className, ...others } = props;
  const classes = useStyles();

  return (
    <ul
      className={clsx(classes.list, className)}
      style={{ height: height }}
      {...others}
    >
      {children}
    </ul>
  );
}

export default HorizontalList;
