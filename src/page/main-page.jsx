import React from "react"
import TimerHandler from "../containers/timer-handler/timer-handler"
import "./style.css"
import Message from "../components/message/message"

export default function Homepage() {
  return (
    <div className="page-block">
      <TimerHandler />
    </div>
  )
}
