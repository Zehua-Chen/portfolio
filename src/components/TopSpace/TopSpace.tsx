import { css } from "@emotion/react";

function TopSpace() {
  return (
    <div
      css={(theme) => css`
        height: ${theme.spacing(2)};
      `}
    ></div>
  );
}

export default TopSpace;
