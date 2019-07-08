import React from "react"
import theme from "../theme"
import Div from "../elements/Div"

const Flex = ({ ...props }) => {
  return (
    <Div {...props}>

    </Div>
  )
}

Flex.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
  width: '100%',
}

export default Flex
