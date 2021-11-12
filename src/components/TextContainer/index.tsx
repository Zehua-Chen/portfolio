import { PropsWithChildren } from "react";
import Container, { ContainerProps } from "@mui/material/Container";

interface TextContainerProps extends Omit<ContainerProps, "maxWidth"> {}

function TextContainer(props: PropsWithChildren<TextContainerProps>) {
  const { children } = props;
  return <Container maxWidth="md">{children}</Container>;
}

export default TextContainer;
