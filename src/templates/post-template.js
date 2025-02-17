import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout" // If you have a layout component

const PostTemplate = ({ data }) => {
  const post = data.wpgraphql.post
  return (
    <Layout>
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        id
        title
        content
      }
    }
  }
`

export default PostTemplate
