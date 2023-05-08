/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import "./timer.css"
import { format } from "fecha"

export default function Timer(props) {
  const { time, isRunning, isGreen } = props

  Timer.propTypes = {
    time: propTypes.number.isRequired,

    isGreen: propTypes.bool,

    isRunning: propTypes.bool.isRequired,
  }

  Timer.defaultProps = {
    isGreen: false,
  }
  const classes = isGreen ? "timer timer-green" : "timer"
  let remaining = time
  useEffect(() => {
    const decreaseTimer = () => {
      const subtrahend = isRunning && remaining > 0 ? 1000 : 0
      remaining -= subtrahend
      console.log(remaining)
    }
    const countdown = setInterval(decreaseTimer, 1000)
    return () => clearInterval(countdown)
  }, [time, isRunning])

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={classes}>
      <span>{`${format(remaining, "mm:ss")}`}</span>
    </div>
  )
}
