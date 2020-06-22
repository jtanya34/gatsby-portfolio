import styled, { keyframes } from "styled-components"
import {
  border,
  space,
  layout,
  typography,
  color,
  position,
  flexbox,
  shadow,
} from "styled-system"

import { zoomIn } from "react-animations"

export const ZoomIn = styled.a`
  animation: 1s ${keyframes`${zoomIn}`};
  text-decoration: none;
  ${shadow}
`

/**
 * ELEMENTS
 */

export const Heading = styled.h1`
	${typography}
    ${color}
    ${space}
    font-weight: "2";
`

export const Div = styled.div`
    ${border}
    ${space}
    ${layout}
    ${typography}
    ${color}
    ${position}
    ${shadow}
    ${flexbox}
`

export const Flex = styled.div`
    display: flex;
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${space}
    ${position}
    ${shadow}
`

/**
 * LINKS
 */

export const Link = styled.a`
    ${border}
    ${space}
    ${layout}
    ${typography}
    ${color}
    cursor:pointer;
    text-decoration:none;
    &:hover {
       color:#e31b6d
    }
    &:active {
        color:#e31b6d
     }
`
