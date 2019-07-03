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
}

export default Flex
