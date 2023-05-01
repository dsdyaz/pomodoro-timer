import React, { useEffect, useState } from "react"
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
  function timer(running) {
    interval = setInterval(() => {
      console.log("isRunning")
    }, 1000)
  }

  // useEffect(() => {
  //   if (isRunning) {
  //     timer(true)
  //   } else {
  //     clearInterval(6)
  //   }
  // }, [isRunning])

  const counter = () => {
    dispatch({ type: "timer/start" })
    console.log(isRunning)
    const start = Date.now()
    const endTime = new Date(start + 20 * 60000)
    const count = () => {
      console.log(isRunning)
      if (isRunning === true) {
        interval = setInterval(() => {
          console.log("isRunning")
          const nowTime = Date.now()
          const remaining = endTime - nowTime
          dispatch({ type: "timer/recordTime", payload: remaining })
          const formated = format(remaining, "mm:ss")
          setTime(formated)
          console.log(isRunning)
          console.log(interval)
        }, 1000)
      } else {
        console.log(interval)
        clearInterval(interval)
      }
    }
    count()
  }

  const runButtonFunc = () => {
    // isRunning
    //   ? () => {
    //       console.log("its already going")
    //       console.log(isRunning)
    //       counter()
    //     }
    //   : () => {
    dispatch({ type: "timer/start" })
    dispatch({ type: "timer/start" })
    console.log(isRunning)
    counter()
  }

  return (
    <div className="timer-block">
      <Timer time={time} />
      <div className="timer-block__buttons">
        <Button text="run" onClickFunc={() => runButtonFunc()} />
        <Button
          text="stop"
          secondary
          onClickFunc={() => {
            console.log(interval)
            dispatch({ type: "timer/stop" })
          }}
        />
      </div>
    </div>
  )
}
