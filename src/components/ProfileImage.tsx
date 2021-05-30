import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function _ProfileImage() {
  return <div></div>;
}

function ProfileImage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          profilePicture: file(relativePath: { eq: "profile-image.jpg" }) {
            childImageSharp {
              fixed(width: 170, height: 170, rotate: 90) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => {
        return <Img fixed={data.profilePicture.childImageSharp.fixed} />;
      }}
    />
  );
}

export default _ProfileImage;
