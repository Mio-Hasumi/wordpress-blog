/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query WordPress posts from your WPGraphQL endpoint
  const result = await graphql(`
    {
      wpgraphql {
        posts {
          nodes {
            id
            uri
          }
        }
      }
    }
  `)

  // If there are errors in the GraphQL query, stop the build with an error message.
  if (result.errors) {
    reporter.panic("Error loading WordPress posts", result.errors)
    return
  }

  // Extract posts from the query results
  const posts = result.data.wpgraphql.posts.nodes;

  posts.forEach(post => {
    console.log(`Creating page: /blog${post.uri}`); // 记录每个页面的路径
    createPage({
      path: `/blog${post.uri}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        id: post.id,
      },
    });
  });
};
