/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import About from "./about"
import Projects from "./projects"
import Header from "./header"
import Skills from "./skills"
import Footer from "./footer"
import "./layout.css"
import { Div, Flex } from "../styled-system/index"

const Layout = data => {
  const executeScroll = ref => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, document.getElementById(ref).offsetTop, {
        passive: true,
      })
    } else {
      return "error"
    }
  }

  const navData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          data
        }
      }
    }
  `)

  return (
    <>
      <Header data={navData.site.siteMetadata.data} onClick={executeScroll} />
      <Div id="#About">
        <About
          data={
            data && data.data && data.data.allSanityAuthor
              ? data.data.allSanityAuthor.nodes
              : undefined
          }
        />
      </Div>
      <Flex
        id="#Projects"
        bg="#f5f5f5"
        height="100%"
        width="100vw"
        mt={5}
        p={5}
        boxShadow="inset 2px 0px 3px 0px hsla(0, 0%, 0%, 0.2)"
      >
        <Projects
          data={
            data && data.data && data.data.allSanityProject
              ? data.data.allSanityProject.nodes
              : undefined
          }
        />
      </Flex>
      <Flex
        id="#Skills"
        height="100%"
        mt={5}
        p={5}
        boxShadow="inset 2px 0px 3px 0px hsla(0, 0%, 0%, 0.2)"
      >
        <Skills />
      </Flex>
      <Div id="#Contact" height="500px">
        <Footer />
      </Div>
    </>
  )
}

export default Layout
