import { DateTime } from "luxon"
import React from "react"
import Button from "../../components/button/button"

export default function TimerHandler() {
  let now

  const nowTime = () => {
    now = DateTime.now().toISO()
    console.log(now)
    const nowPlus = DateTime.now().plus({ minutes: 15 }).toISO()
    console.log(nowPlus)
  }
  return (
    <div>
      <Button text="timeeeee" onClickFunc={() => nowTime()} />
    </div>
  )
}
