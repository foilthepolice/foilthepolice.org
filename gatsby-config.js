module.exports = {
  siteMetadata: {
    title: "Foil the Police",
    description: "Freedom of Information (FOI) requests are a tool everyone has to uncover police department lies and violent officers. E-mail your local government clerk with a request template and see what you uncover.",
  },
  plugins: [
    /* Images source */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    /* Template data source */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "email-templates",
        path: `${__dirname}/data/templates/`,
        ignore: ["README.md"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-remark",
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
  ],
}
