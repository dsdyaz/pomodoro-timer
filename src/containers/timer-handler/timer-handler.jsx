import React, { useState } from "react"
import Button from "../../components/button/button"
import Timer from "../../components/timer/timer"

export default function TimerHandler() {
  const [timeAmount, setTimeAmount] = useState(0)
  const [isRunning, setRunning] = useState(false)

  const runButtonFunc = isRunning
    ? () => {
        console.log("its already going")
      }
    : () => {
        setTimeAmount(20 * 60 * 1000)
        setRunning(true)
      }

  return (
    <div className="timer-block">
      <Timer time={timeAmount} isRunning={isRunning} />
      <div className="timer-block__buttons">
        <Button text="run" onClickFunc={() => runButtonFunc()} />
        <Button
          text="stop"
          secondary
          onClickFunc={() => {
            setRunning(false)
          }}
        />
      </div>
    </div>
  )
}
