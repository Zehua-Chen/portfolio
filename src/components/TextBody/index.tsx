import { PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

function TextBody(props: PropsWithChildren<Omit<TypographyProps, "variant">>) {
  const { children, ...others } = props;
  return <Typography {...others}>{children}</Typography>;
}

export default TextBody;
