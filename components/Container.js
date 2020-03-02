import React from "react"
import theme from "../theme"
import Div from "../elements/Div"

const Container = ({ innerBg, innerWidth, ...props }) => {
  return (
    <Div {...props}>
      <Div mx="auto" maxWidth={innerWidth} bg={innerBg} px={3}>
        {props.children}
      </Div>
    </Div>
  )
}

Container.defaultProps = {
  innerWidth: theme.containerWidth? theme.containerWidth: '38em',
  fontSize: 3,
  innerBg: "transparent"
}

export default Container
