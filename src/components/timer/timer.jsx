/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import "./timer.css"
import { format } from "fecha"

export default function Timer(props) {
  const { time, isRunning, isRest } = props

  Timer.propTypes = {
    time: propTypes.number.isRequired,

    isRest: propTypes.bool,

    isRunning: propTypes.bool.isRequired,
  }

  Timer.defaultProps = {
    isRest: false,
  }

  const [displayedTime, setDisplayedTime] = useState(1)
  const [isGreen, setGreen] = useState(false)

  const classes = isGreen ? "timer timer-green" : "timer"

  useEffect(() => {
    setDisplayedTime(time)
    console.log(displayedTime)
  }, [time])

  const audioCtx = new (window.AudioContext ||
    window.WebkitAudioContext ||
    window.AudioContext)()
  function beep(duration, frequency, volume, type, callback) {
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    if (volume) {
      gainNode.gain.value = volume
    }
    if (frequency) {
      oscillator.frequency.value = frequency
    }
    if (type) {
      oscillator.type = type
    }
    if (callback) {
      oscillator.onended = callback
    }

    oscillator.start(audioCtx.currentTime)
    oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000)
  }

  useEffect(() => {
    console.log(`${isRunning} ${time} ${displayedTime}`)
    const interval =
      isRunning &&
      setInterval(() => {
        const newDisplayedTime = displayedTime - (displayedTime > 0 ? 1000 : 0)
        console.log(newDisplayedTime)
        setDisplayedTime(newDisplayedTime)
        if (displayedTime > 0 && displayedTime < 1001) {
          setGreen(!isGreen)
          beep()
          setDisplayedTime(6000)
        }
      }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, displayedTime])

  return (
    <div className={classes}>
      <span>{`${format(displayedTime, "mm:ss")}`}</span>
    </div>
  )
}
