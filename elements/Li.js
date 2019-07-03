import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  lineHeight,
} from 'styled-system'

const Li = styled('li', { shouldForwardProp })(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  lineHeight,
  {
    boxSizing: 'border-box',
  },
)

Li.defaultProps = {
  pl: 0,
  lineHeight: 1.5,
  fontSize: [2, 3],
}

export default Li
