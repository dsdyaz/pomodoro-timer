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

  const [displayedTime, setDisplayedTime] = useState(1)

  useEffect(() => {
    setDisplayedTime(time)
    console.log(displayedTime)
  }, [time])

  useEffect(() => {
    console.log(`${isRunning} ${time} ${displayedTime}`)
    const interval =
      isRunning &&
      setInterval(() => {
        const newDisplayedTime = displayedTime - (displayedTime > 0 ? 1000 : 0)
        console.log(newDisplayedTime)
        setDisplayedTime(newDisplayedTime)
      }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, displayedTime])

  return (
    <div className={classes}>
      <span>{`${format(displayedTime, "mm:ss")}`}</span>
    </div>
  )
}
