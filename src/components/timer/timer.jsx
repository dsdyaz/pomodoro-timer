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

  const [displayedTime, setDisplayedTime] = useState(0)

  useEffect(() => {
    setDisplayedTime(time)
  }, [time])

  useEffect(() => {
    const interval =
      isRunning &&
      setInterval(() => {
        const subtrahend = isRunning && displayedTime > 0 ? 1000 : 0
        const newDisplayedTime = displayedTime - subtrahend
        setDisplayedTime(newDisplayedTime)
      }, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className={classes}>
      <span>{`${format(displayedTime, "mm:ss")}`}</span>
    </div>
  )
}
