let config = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Zehua Chen's Homepage`,
    description: `This is a page about Zehua Chen!`,
    author: `@Zehua Chen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zehua Chen's Personal Homepage`,
        short_name: `Zehua Chen`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-111245837-2"
    //   }
    // }
  ],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-111245837-2"
    }
  })
}

module.exports = config;
