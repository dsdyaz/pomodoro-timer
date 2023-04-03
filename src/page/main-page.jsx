import React from "react"
import Button from "../components/button/button"
import Timer from "../components/timer/timer"
import TimerHandler from "../containers/timer-handler/timer-handler"

export default function Homepage() {
  return (
    <div>
      <Timer minutes="2" seconds="50" />
      <Timer isGreen minutes="17" seconds="48" />
      <TimerHandler />
      <Button text="thats button" />
      <Button text="secondary" secondary />
    </div>
  )
}
