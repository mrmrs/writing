import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import Link from "next/link"
import theme from "../theme"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle
} from "styled-system"

const BlockLink = styled('a', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    transition: 'color .2s ease-in',
    opacity: 1,
    ":hover": {
      cursor: "pointer",
      transition: 'color .33s ease-in',
      opacity: 1,
      color: theme.colors.blue[6], 
    },
    ":focus": {
      cursor: "pointer",
      transition: 'color .33s ease-in',
      opacity: 1,
      color: theme.colors.indigo[6], 
    }
  }
)

BlockLink.defaultProps = {
  fontSize: [2,3],
  display: "block",
  bg: "transparent",
  py: 2,
}

export default ({ children, href, ...props }) => (
  <Link href={href}>
    <BlockLink {...props}>{children}</BlockLink>
  </Link>
)
