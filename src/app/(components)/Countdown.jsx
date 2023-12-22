"use client"
import { FaPlay } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"

import { FaPause } from "react-icons/fa6"
import React, { useState, useEffect } from "react"

const Countdown = ({ minutes }) => {
  const [remMinutes, setRemMinutes] = useState(minutes)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [startMinutes, setStartMinutes] = useState(minutes)

  useEffect(() => {
    let countdownInterval

    if (isRunning) {
      countdownInterval = setInterval(() => {
        if (remMinutes === 0 && seconds === 0) {
          clearInterval(countdownInterval)
          setIsRunning(false)
        } else {
          if (seconds === 0) {
            setRemMinutes(remMinutes - 1)
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
  }, [remMinutes, seconds, isRunning])

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setRemMinutes(startMinutes)
    setSeconds(0)
  }
  return (
    <section className='bg-slate-500 flex justify-center text-2xl w-full'>
      <div className=''>
        <div>
          <span>{remMinutes < 10 ? `0${remMinutes}` : remMinutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <div className='flex justify-around bg-red-200 w-full'>
          <button onClick={resetTimer}>
            <FaArrowRotateLeft />
          </button>
          <button onClick={startTimer}>
            <FaPlay />
          </button>
          <button onClick={stopTimer}>
            <FaPause />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Countdown
