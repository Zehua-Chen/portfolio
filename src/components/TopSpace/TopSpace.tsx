import { css } from "@emotion/react";

function TopSpace() {
  return (
    <div
      css={(theme) => css`
        height: ${theme.spacing(2)}px;
      `}
    ></div>
  );
}

export default TopSpace;
