"use client"

import React, { useState, useEffect } from "react"

const Countdown = ({ StartMinutes = 25 }) => {
  const [minutes, setMinutes] = useState(StartMinutes)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let countdownInterval

    if (isRunning) {
      countdownInterval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(countdownInterval)
          setIsRunning(false)
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
          } else {
            setSeconds(seconds - 1)
          }
        }
      }, 1000)
    } else {
      clearInterval(countdownInterval)
    }

    return () => {
      clearInterval(countdownInterval)
    }
  }, [minutes, seconds, isRunning])

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setMinutes(25)
    setSeconds(0)
  }
  return (
    <section>
      <div>
        <div>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </section>
  )
}

export default Countdown
