import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import Layout from "../components/Layout";

function NotFoundPage() {
  return (
    <Layout>
      <div
        css={css`
          min-height: "100vh";
          display: "flex";
          flex-direction: "column";
          align-items: "center";
          justify-content: "center";
        `}
      >
        <ErrorIcon
          css={(theme) => css`
            font-size: 40;
            margin-bottom: ${theme.spacing(2)};
          `}
        />
        <Typography>Page Not Found!</Typography>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
