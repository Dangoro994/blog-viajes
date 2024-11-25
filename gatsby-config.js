module.exports = {
  // pathPrefix: "/blog-viajes",
  siteMetadata: {
    title: `Blog de viajes`,
    author: 'Danel Lopez'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
