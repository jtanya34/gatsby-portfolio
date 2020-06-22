import React from "react"
import Img from "gatsby-image"
import { Heading, Flex, Div, ZoomIn } from "../styled-system/index"
import "./layout.css"
const Projects = ({ data }) => {
  return (
    <Div>
      <Heading mt={3} textAlign="center">
        Projects
      </Heading>
      <Flex textAlign="center" flexWrap="wrap" justifyContent="center">
        {data &&
          data.map((node, idx) => (
            <ZoomIn
              width="40rem"
              height="300px"
              m={2}
              href={node.link}
              key={idx}
              aria-label="project"
            >
              <Img
              className="project_img"
                style={{
                  height: "300px",
                  margin: "2rem -1.5rem",
                  boxShadow: "10px 10px 18px #a1a49a,0px -10px 18px #fdfff2",
                }}
                fluid={node.image.asset.fluid}
              />
              <Flex width="100%" flexDirection="column" mb={4} mt={2}>
                <Heading color="#1b242f" textAlign={"center"}>
                  {node.title}
                </Heading>
                <Div
                  color="#1b242f"
                  fontSize={3}
                  textAlign={"center"}
                  outline="none"
                >
                  {node.description}
                </Div>
              </Flex>
            </ZoomIn>
          ))}
      </Flex>
    </Div>
  )
}
export default Projects
