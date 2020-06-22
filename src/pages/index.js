import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="Home"></SEO>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allSanityAuthor {
      nodes {
        description
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 50, maxHeight: 50) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    allSanityProject {
      nodes {
        description
        title
        link
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`
