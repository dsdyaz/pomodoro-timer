import React, { useEffect, useState } from "react"
import { format } from "fecha"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/button/button"
import Timer from "../../components/timer/timer"
import {
  SelectRemainingTime,
  SelectRunning,
  SelectTimerId,
} from "../../modules/timer/timer.selectors"

export default function TimerHandler() {
  const dispatch = useDispatch()
  const isRunning = useSelector(SelectRunning)
  const timerId = useSelector(SelectTimerId)
  const remainingTime = useSelector(SelectRemainingTime)
  let interval
  const [time, setTime] = useState(100000)

  if (remainingTime > 0 && remainingTime <= 1000) {
    dispatch({ type: "timer/stop" })
    dispatch({ type: "timer/recordTime", payload: 0 })
    dispatch({ type: "timer/toggleRest" })
  }

  const decreaseTimer = () => {
    setTime(time - 1000)
  }

  useEffect(() => {
    if (time <= 0) {
      return
    }
    const countdown = setInterval(decreaseTimer, 1000)
    // eslint-disable-next-line consistent-return
    return () => clearInterval(countdown)
  }, [decreaseTimer, time])

  const runButtonFunc = isRunning
    ? () => {
        console.log("its already going")
      }
    : () => dispatch({ type: "timer/start" })

  return (
    <div className="timer-block">
      <Timer time={format(time, "mm:ss")} />
      <div className="timer-block__buttons">
        <Button text="run" onClickFunc={() => runButtonFunc()} />
        <Button
          text="stop"
          secondary
          onClickFunc={() => {
            dispatch({ type: "timer/stop" })
          }}
        />
      </div>
    </div>
  )
}
