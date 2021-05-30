import React, { PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

function TextBody(props: PropsWithChildren<Omit<TypographyProps, "variant">>) {
  const { children, ...others } = props;
  return <Typography {...others}>{children}</Typography>;
}

export default TextBody;
