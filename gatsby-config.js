module.exports = {
  siteMetadata: {
    title: `Your Blog Title`,
    description: `Your Blog Description`,
    author: `@yourhandle`,
    siteUrl: `https://your-netlify-site.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `Your Gatsby Blog`,
        short_name: `YourBlog`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `http://146.190.157.121/graphql/`,
      },
    },
  ],
};
