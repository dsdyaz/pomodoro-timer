import React from "react"
import propTypes from "prop-types"
import "./message.css"

export default function Message(props) {
  const { text, isGreen } = props

  Message.propTypes = {
    text: propTypes.string.isRequired,
    isGreen: propTypes.bool,
  }

  Message.defaultProps = {
    isGreen: false,
  }

  const classes = isGreen ? "message message_green" : "message"

  return (
    <div className={classes}>
      <span>{text}</span>
    </div>
  )
}
