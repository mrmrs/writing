import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  display,
  maxWidth,
  fontSize,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} from 'styled-system'

const Ol = styled('ol', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  lineHeight,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  {
    boxSizing: 'border-box',
  },
)

Ol.defaultProps = {
  lineHeight: 1.5,
  fontSize: 1
}

export default Ol
