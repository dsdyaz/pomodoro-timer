import React, { useState } from "react"
import { format } from "fecha"
import { useDispatch } from "react-redux"
import Button from "../../components/button/button"
import Timer from "../../components/timer/timer"

export default function TimerHandler() {
  const dispatch = useDispatch()
  const [time, setTime] = useState("00:00")
  const counter = () => {
    const start = Date.now()
    const endTime = new Date(start + 20 * 60000)
    const count = () => {
      dispatch({ type: "timer/start" })
      setInterval(() => {
        const nowTime = Date.now()
        const remaining = endTime - nowTime
        dispatch({ type: "timer/recordTime", payload: remaining })
        const formated = format(remaining, "mm:ss")
        setTime(formated)
      }, 1000)
    }
    count()
  }

  return (
    <div>
      <Timer time={time} />
      <Button text="run" onClickFunc={() => counter()} />
    </div>
  )
}
