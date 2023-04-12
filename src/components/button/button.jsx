import React from "react"
import "./button.css"
import propTypes from "prop-types"

/**
 * Button component
 * @param secondary - bool, if true changes button styles to secondary variant
 * @param classes - string, additional classes if needed
 * @param text - string, text content of button
 * @param onClickFunc - function that will be performed onClick if passed
 * @returns node, Button component
 */
export default function Button(props) {
  const { secondary, classes, text, onClickFunc } = props

  Button.propTypes = {
    secondary: propTypes.bool,

    classes: propTypes.string,

    text: propTypes.string.isRequired,

    onClickFunc: propTypes.func,
  }

  Button.defaultProps = {
    secondary: false,
    classes: null,
    onClickFunc: null,
  }

  const mainClassName = secondary ? "button-secondary" : "button-primary"
  const buttonClasses = classes
    ? [mainClassName, ...classes.split(" ")]
    : [mainClassName]

  return (
    <button
      type="button"
      onClick={onClickFunc}
      onKeyDown={onClickFunc}
      className={buttonClasses.join(" ")}
    >
      {text}
    </button>
  )
}
