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

  if (remainingTime > 0 && remainingTime <= 1000) {
    dispatch({ type: "timer/stop" })
    dispatch({ type: "timer/recordTime", payload: 0 })
    dispatch({ type: "timer/toggleRest" })
  }
  const [timeAmount, setTimeAmount] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    if (isRunning) {
      setTimeAmount(6000)
      setRunning(true)
    } else {
      setRunning(false)
    }
    console.log(timeAmount)
  }, [isRunning])

  const runButtonFunc = isRunning
    ? () => {
        console.log("its already going")
      }
    : () => {
        dispatch({ type: "timer/start" })
      }

  return (
    <div className="timer-block">
      <Timer time={timeAmount} isRunning={running} />
      <div className="timer-block__buttons">
        <Button text="run" onClickFunc={() => runButtonFunc()} />
        <Button text={`${timeAmount}`} />
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
