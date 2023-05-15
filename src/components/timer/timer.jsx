import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import "./timer.css"
import { format } from "fecha"
import Message from "../message/message"
import beep from "../../external_func/beep"

export default function Timer(props) {
  const { time, isRunning } = props

  Timer.propTypes = {
    time: propTypes.number.isRequired,

    isRunning: propTypes.bool.isRequired,
  }

  const [displayedTime, setDisplayedTime] = useState(1)
  const [isRest, setRest] = useState(false)

  const classes = isRest ? "timer timer-green" : "timer"

  useEffect(() => {
    setDisplayedTime(time)
    console.log(displayedTime)
  }, [time])

  useEffect(() => {
    const interval =
      isRunning &&
      setInterval(() => {
        const newDisplayedTime = displayedTime - (displayedTime > 0 ? 1000 : 0)
        setDisplayedTime(newDisplayedTime)
        if (displayedTime > 0 && displayedTime < 1001) {
          setRest(!isRest)
          beep()
          setTimeout(() => beep(), 800)
          setDisplayedTime(6000)
        }
      }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, displayedTime])

  return (
    <div className={classes}>
      <Message text={`${isRest ? "rest" : "work"} time!!`} isGreen={isRest} />
      <span>{`${format(displayedTime, "mm:ss")}`}</span>
    </div>
  )
}
