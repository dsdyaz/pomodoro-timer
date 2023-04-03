import React, { useState } from "react"
import { format } from "fecha"
import Button from "../../components/button/button"
import Timer from "../../components/timer/timer"

export default function TimerHandler() {
  const [time, setTime] = useState("00:00")
  const counter = () => {
    const start = Date.now()
    const endTime = new Date(start + 20 * 60000)
    const count = () =>
      setInterval(() => {
        const nowTime = Date.now()
        const counted = format(endTime - nowTime, "mm:ss")
        setTime(counted)
      }, 1000)
    count()
  }

  return (
    <div>
      <Timer time={time} />
      <Button text="eeeeee" onClickFunc={() => counter()} />
    </div>
  )
}
