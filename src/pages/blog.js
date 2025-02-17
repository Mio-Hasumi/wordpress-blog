import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes

  return (
    <Layout>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/blog${post.uri}`} dangerouslySetInnerHTML={{ __html: post.title }} />
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt || "" }} />
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          id
          uri
          title
          excerpt
        }
      }
    }
  }
`

export default BlogPage
