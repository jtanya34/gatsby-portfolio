module.exports = {
  siteMetadata: {
    title: "portfolio",
    description: "data",
    author: "tanya",
    lang: "en",
    data: ["Home", "About", "Projects", "Skills", "Contact"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "798ktqre",
        dataset: "portfolio",
        overlayDrafts: true,
        watchMode: true,
        token:
          "skYOUfdwBKoXETfXQLQ2M1JHObxbzc1fUfR2oZuSUjxll4aSfbags22mGyf3tojLGMbdfijpYFxC0YUi4x1CdsrypYvZLroBbd0ebLn8rWzrbvxzTWSVYrGofKkWlWD4FKOCUJ7N2fPuUS49zhnVLuLpOeAN65rkRyblcl3UMk1LUTGt5UAT",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
