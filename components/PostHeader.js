/** @jsx jsx */
import jsx from '../jsx'
import React from "react"
import theme from "../theme"

const PostHeader = ({ title, published, subtitle, ...props }) => {
  return (
    <header pt={5} pb={4} {...props}>
      <time fontSize={1}>{published}</time>
      <h1 my={0}>{title}</h1>
    </header>
  )
}

PostHeader.defaultProps = {

}

export default PostHeader
