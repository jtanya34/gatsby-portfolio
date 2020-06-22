import React from "react"
import { Div, Flex, Link } from "../styled-system/index"

const Header = ({ data, onClick }) => {
  return (
    <Div bg="#1b242f" mb="1.45rem" p="1rem" borderBottom="3px solid #04c2c9">
      <Flex width="60%" justifyContent="space-evenly">
        {data.map((each, idx) => {
          return (
            <Link
              color="#fff"
              onClick={() => onClick(`#${each}`)}
              key={idx}
              aria-label="author"
            >
              {each}
            </Link>
          )
        })}
      </Flex>
    </Div>
  )
}

export default Header
