import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import "./timer.css"
import { format } from "fecha"

export default function Timer(props) {
  const { time, isGreen } = props

  Timer.propTypes = {
    time: propTypes.number,

    isGreen: propTypes.bool,
  }

  Timer.defaultProps = {
    time: 0,
    isGreen: false,
  }
  const classes = isGreen ? "timer timer-green" : "timer"

  const [timer, setTimer] = useState(time)
  console.log(time)
  const decreaseTimer = () => {
    setTimer(timer - 1000)
  }

  useEffect(() => {
    if (timer <= 0) {
      return undefined
    }
    const countdown = setInterval(decreaseTimer, 1000)
    return () => clearInterval(countdown)
  }, [decreaseTimer, timer])

  return (
    <div className={classes}>
      <span>{format(timer, "mm:ss")}</span>
    </div>
  )
}
