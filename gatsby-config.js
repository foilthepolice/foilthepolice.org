module.exports = {
  siteMetadata: {
    title: `FOIL the police`,
    description: `TODO(nsahler)`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/foilthepolice.org",
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
    `gatsby-plugin-sharp`
  ],
}
