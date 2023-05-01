import React, { useState } from "react"
import { format } from "fecha"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/button/button"
import Timer from "../../components/timer/timer"
import {
  SelectRemainingTime,
  SelectRunning,
} from "../../modules/timer/timer.selectors"

export default function TimerHandler() {
  const dispatch = useDispatch()
  const isRunning = useSelector(SelectRunning)
  const remainingTime = useSelector(SelectRemainingTime)
  let interval
  const [time, setTime] = useState("00:00")
  const counter = () => {
    console.log(isRunning)
    const start = Date.now()
    const endTime = new Date(start + 20 * 60000)
    const count = () => {
      console.log(isRunning)
      if (isRunning) {
        interval = setInterval(() => {
          const nowTime = Date.now()
          const remaining = endTime - nowTime
          dispatch({ type: "timer/recordTime", payload: remaining })
          const formated = format(remaining, "mm:ss")
          setTime(formated)
        }, 1000)
      } else {
        clearInterval(interval)
      }
    }
    count()
  }

  const runButtonFunc = isRunning
    ? () => {
        console.log("its already going")
        console.log(isRunning)
      }
    : () => {
        dispatch({ type: "timer/start" })
        console.log(isRunning)
        counter()
      }

  return (
    <div className="timer-block">
      <Timer time={time} />
      <div className="timer-block__buttons">
        <Button text="run" onClickFunc={() => runButtonFunc()} />
        <Button text="stop" secondary />
      </div>
    </div>
  )
}
