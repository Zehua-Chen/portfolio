import React, { HTMLProps, PropsWithChildren } from "react";
import clsx from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface HorizontalLisItemProps extends HTMLProps<HTMLLIElement> {
  width?: number;
}

const styles = (theme: Theme) =>
  createStyles({
    item: {
      // Default is block, which make every item occupies its own line
      display: "inline-block",
      // Width
      // width: 150,
      // Full height
      height: "100%",
      // Set spacing
      marginLeft: 10,
      marginRight: 10,
      // Reset whiteSpace for children
      whiteSpace: "normal",
      // Force direct child to go full height and full width
      "& > *": {
        height: "100%",
        width: "100%",
      },
    },
  });

const useStyles = makeStyles(styles);

function HorizontalListItem(
  props: PropsWithChildren<HorizontalLisItemProps> = { width: 200 }
) {
  const { children, width, className, ...others } = props;
  const classes = useStyles();

  return (
    <li
      className={clsx(classes.item, className)}
      style={{ width: width }}
      {...others}
    >
      {children}
    </li>
  );
}

export default HorizontalListItem;
