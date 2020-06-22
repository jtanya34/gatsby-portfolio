import React from "react"
import { Div, Link } from "../styled-system/index"

const Footer = () => {
  return (
    <Div
      bg="#1b242f"
      p="1rem"
      border="3px 0 solid #04c2c9"
      height="100%"
      textAlign="center"
    >
      <Div textAlign="center" color="#fff" fontSize={5} p={5}>
        Contact
      </Div>
      <Div color="#04c2c9" fontSize={4}>
        Have a question or want to work together?
        <Div m={2}>
          Drop me a mail at
          <Link color="#04c2c9" href="#">
            jtanya34@gmail.com
          </Link>
        </Div>
        <Div m={5}>
          Checkout the List of some interesting 
          <Link color="#04c2c9" m={2} href="/blog">
              Blogs
          </Link>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer
