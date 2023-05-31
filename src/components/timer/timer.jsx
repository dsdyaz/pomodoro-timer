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

  const [displayedTime, setDisplayedTime] = useState(0)
  const [isRest, setRest] = useState(false)
  const [cycleCount, setCycleCount] = useState(1)

  const classes = isRest ? "timer timer-green" : "timer"

  useEffect(() => {
    setDisplayedTime(time)
  }, [time])

  function finishRound(rest) {
    const restTime = cycleCount === 4 ? 20 * 60 * 1000 : 5 * 60 * 1000
    setDisplayedTime(rest ? 20 * 60 * 1000 : restTime)
    const restCount = cycleCount === 4 ? 1 : cycleCount + 0
    setCycleCount(rest ? cycleCount + 0 : restCount)
  }

  useEffect(() => {
    const interval =
      isRunning &&
      setInterval(() => {
        const newDisplayedTime = displayedTime - (displayedTime > 0 ? 1000 : 0)
        setDisplayedTime(newDisplayedTime)
        if (displayedTime > 0 && displayedTime < 1001) {
          setRest(!isRest)
          finishRound(isRest)
          beep()
          setTimeout(() => beep(), 800)
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
