"use client"
import playAudio from "./MusicPlayer"
import { FaPlay } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"
import { FaPause } from "react-icons/fa6"
import React, { useState, useEffect } from "react"
import Image from "next/image"

const Countdown = ({ minutes, imageBanner }) => {
  const [remMinutes, setRemMinutes] = useState(minutes)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [startMinutes, setStartMinutes] = useState(minutes)

  useEffect(() => {
    let countdownInterval

    if (isRunning) {
      countdownInterval = setInterval(() => {
        if (remMinutes === 0 && seconds === 0) {
          playAudio("/sounds/soft-piano.wav")
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
    <section className=' flex flex-col justify-center items-center mb-8  text-2xl w-full '>
      <Image
        src={imageBanner}
        width={300}
        height={300}
        alt='picture of Countdown'
      />
      <div className='flex flex-col justify-center items-center text-orange '>
        <div className='minutes text-8xl mb-2 font-bold'>
          <span>{remMinutes < 10 ? `0${remMinutes}` : remMinutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <div className='clk-btns flex justify-around w-full text-6xl '>
          <button onClick={resetTimer}>
            <FaArrowRotateLeft className='clock-btn ' />
          </button>
          <button onClick={startTimer}>
            <FaPlay className='clock-btn' />
          </button>
          <button onClick={stopTimer}>
            <FaPause className='clock-btn' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Countdown
