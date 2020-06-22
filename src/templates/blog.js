import React from "react"
import { Div, Heading, Link } from "../styled-system/index"

const Blog = data => {
  const blogs =
    data && data.pageResources ? data.pageResources.json.pageContext.data : []

  return (
    <Div>
      {blogs.map(each => {
        return (
          <Div
            bg="#f5f5f5"
            height="10%"
            p={5}
            m={2}
            boxShadow={"10px 10px 18px #a1a49a, 0px -10px 18px #fdfff2"}
          >
            <Heading fontWeight={1}>{each.title}</Heading>
            <Div>
              Read more about it on
              <Link
                textAlign="center"
                ml={2}
                href={each.link}
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </Link>
            </Div>
          </Div>
        )
      })}
    </Div>
  )
}

export default Blog
