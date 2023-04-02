import React from "react"
import "./button.css"
import propTypes from "prop-types"

export default function Button(props) {
  const { secondary, classes, text } = props

  Button.propTypes = {
    secondary: propTypes.bool,

    classes: propTypes.string,

    text: propTypes.string.isRequired,
  }

  Button.defaultProps = {
    secondary: false,
    classes: null,
  }

  return (
    <button type="button" className="button-primary">
      this is button
    </button>
  )
}
