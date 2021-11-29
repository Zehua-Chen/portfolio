import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function ProfileImage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          profilePicture: file(relativePath: { eq: "profile-image.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                height: 170
                width: 170
                transformOptions: { rotate: 90 }
              )
            }
          }
        }
      `}
      render={(data) => {
        return (
          <GatsbyImage
            imgStyle={{ borderRadius: "50%" }}
            image={data.profilePicture.childImageSharp.gatsbyImageData}
            alt="Zehua's Profile Avatar"
          />
        );
      }}
    />
  );
}

export default ProfileImage;
