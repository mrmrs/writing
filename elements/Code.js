import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Code = styled('code', { shouldForwardProp })(
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "monospace, monospace",
    maxWidth: '100%',
    overflowX: 'scroll',
  }
)

Code.defaultProps = {
  fontSize: [0, 1]
}

export default Code
