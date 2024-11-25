module.exports = {
  pathPrefix: "/blog-viajes",
  siteMetadata: {
    title: `Mi Blog Personal`,
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
