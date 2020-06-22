import React from "react"
import Img from "gatsby-image"
import { Heading, Flex, Link } from "../styled-system/index"
import { GitHub, Twitter, Linkedin } from "react-feather"

const About = ({ data }) => {
  return (
    data &&
    data.map((node, idx) => (
      <Flex justifyContent="space-evenly" key={idx}>
        <Img
          style={{
            width: "20%",
            height: "40%",
            borderRadius: "0%",
            boxShadow: "20px 20px 28px #a1a49a,-20px -20px 28px #fdfff2",
          }}
          fluid={node.image.asset.fluid}
        />
        <Flex width="50%" flexDirection="column">
          <Heading>{node.name}</Heading>
          {node.description}
          <Flex m={2} mt={5}>
            <Link
              m={2}
              href="https://github.com/jtanya34"
              target="_blank"
              px={2}
              py={1}
              tabIndex="0"
              aria-label="github"
              rel="noreferrer"
            >
              <GitHub size="32" />
            </Link>
            <Link
              m={2}
              href="https://www.linkedin.com/in/jtanya34/"
              target="_blank"
              px={2}
              py={1}
              tabIndex="-1"
              aria-label="linkedin"
              rel="noreferrer"
            >
              <Linkedin size="32" />
            </Link>
            <Link
              m={2}
              href="https://twitter.com/jtanya34"
              target="_blank"
              px={2}
              py={1}
              tabIndex="-2"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <Twitter size="32" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    ))
  )
}
export default About
