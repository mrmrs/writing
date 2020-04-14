import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
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

const A = styled('a', { shouldForwardProp })(
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

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
}

export default A
