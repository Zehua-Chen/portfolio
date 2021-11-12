import { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import Typography, { TypographyProps } from "@mui/material/Typography";

function TextHeading(
  props: PropsWithChildren<Omit<TypographyProps, "variant">>
) {
  const { children, ...others } = props;

  return (
    <Typography
      css={(theme) => css`
        margin-top: ${theme.spacing()},
        margin-bottom: ${theme.spacing()},
      `}
      variant="h5"
      {...others}
    >
      {children}
    </Typography>
  );
}

export default TextHeading;
