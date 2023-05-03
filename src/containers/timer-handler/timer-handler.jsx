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
  const [time, setTime] = useState("00:00")

  const counter = () => {
    const start = Date.now()
    const endTime =
      remainingTime === 0
        ? new Date(start + 0.2 * 60000)
        : new Date(start + remainingTime)
    // if (remainingTime < 0) {
    //   console.log(remainingTime)
    //   // dispatch({ type: "timer/recordTime", payload: 0 })
    //   dispatch({ type: "timer/stop" })
    //   // dispatch({ type: "timer/toggleRest" })
    //   // dispatch({ type: "timer/start" })
    // }
    const count = () => {
      interval = window.setInterval(() => {
        const nowTime = Date.now()
        const remaining = endTime - nowTime
        dispatch({ type: "timer/recordTime", payload: remaining })
        const formated = format(remaining, "mm:ss")
        setTime(formated)
        dispatch({ type: "timer/setId", payload: `${interval}` })
      }, 1000)
    }
    count()
  }

  useEffect(() => {
    if (isRunning) {
      counter()
      if (remainingTime > 0 && remainingTime < 3000) {
        console.log(remainingTime)
        dispatch({ type: "timer/recordTime", payload: 0 })
        dispatch({ type: "timer/stop" })
        // dispatch({ type: "timer/toggleRest" })
        // dispatch({ type: "timer/start" })
      }
    } else {
      clearInterval(timerId)
    }
  }, [isRunning, remainingTime])

  const runButtonFunc = isRunning
    ? () => {
        console.log("its already going")
      }
    : () => dispatch({ type: "timer/start" })

  return (
    <div className="timer-block">
      <Timer time={time} />
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
