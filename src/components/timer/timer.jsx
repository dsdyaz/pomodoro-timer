import React from "react"
import propTypes from "prop-types"
import "./timer.css"

export default function Timer(props) {
  const { time, isGreen } = props

  Timer.propTypes = {
    time: propTypes.string.isRequired,

    isGreen: propTypes.bool,
  }

  Timer.defaultProps = {
    isGreen: false,
  }
  const classes = isGreen ? "timer timer-green" : "timer"
  return (
    <div className={classes}>
      <span>{time}</span>
    </div>
  )
}
