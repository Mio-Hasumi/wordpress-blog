import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <h1>
        This page is <b>rendered server-side</b>
      </h1>
      <p>
        This page is rendered server-side every time the page is requested.
        Reload it to see a(nother) random photo from{" "}
        <code>dog.ceo/api/breed/shiba/images/random</code>:
      </p>
      <img
        style={{ width: "320px", borderRadius: "var(--border-radius)" }}
        alt="A random dog"
        src={serverData?.message || "https://via.placeholder.com/320?text=No+Image+Available"}
      />
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed with status: ${res.status}`)
    }

    const data = await res.json()

    // Ensure the response contains the expected property
    if (!data?.message) {
      throw new Error("No image URL found in API response")
    }

    return {
      props: data,
    }
  } catch (error) {
    console.error("Error fetching dog image:", error)

    return {
      status: 500,
      headers: {},
      props: {
        message: "https://via.placeholder.com/320?text=Error+Loading+Image",
      },
    }
  }
}
