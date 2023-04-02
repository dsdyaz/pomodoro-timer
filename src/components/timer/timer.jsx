import React from "react"
import propTypes from "prop-types"
import "./timer.css"

export default function Timer(props) {
  const { minutes, seconds, isGreen } = props

  Timer.propTypes = {
    minutes: propTypes.string.isRequired,

    seconds: propTypes.string.isRequired,

    isGreen: propTypes.bool,
  }

  Timer.defaultProps = {
    isGreen: false,
  }
  const classes = isGreen ? "timer timer-green" : "timer"
  return (
    <div className={classes}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )
}
