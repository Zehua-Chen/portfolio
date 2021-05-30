import React, { PropsWithChildren } from "react";
import Container, { ContainerProps } from "@material-ui/core/Container";

interface TextContainerProps extends Omit<ContainerProps, "maxWidth"> {}

function TextContainer(props: PropsWithChildren<TextContainerProps>) {
  const { children } = props;
  return <Container maxWidth="md">{children}</Container>;
}

export default TextContainer;
