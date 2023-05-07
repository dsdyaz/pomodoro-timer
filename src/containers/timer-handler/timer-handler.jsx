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

  if (remainingTime > 0 && remainingTime <= 1000) {
    dispatch({ type: "timer/stop" })
    dispatch({ type: "timer/recordTime", payload: 0 })
    dispatch({ type: "timer/toggleRest" })
  }
  const [time, setTime] = useState(0)
  useEffect(() => {
    if (isRunning) {
      setTime(6000)
    } else {
      setTime(0)
    }
    console.log(time)
  }, [isRunning])

  const runButtonFunc = isRunning
    ? () => {
        console.log("its already going")
      }
    : () => {
        dispatch({ type: "timer/start" })
        setTime(6000)
      }

  return (
    <div className="timer-block">
      <Timer time={time} />
      <div className="timer-block__buttons">
        <Button text="run" onClickFunc={() => runButtonFunc()} />
        <Button text={`${time}`} />
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
