"use client"

import { useState } from "react"
import CountDown from "./Countdown"

function Counters() {
  const [title, setTitle] = useState("")
  const [startMinutes, setStartMinutes] = useState(25)

  const handleButton = (text, min) => {
    setStartMinutes(min)
    setTitle(text)
  }
  return (
    <section className='flex-col justify-center '>
      <div className='bg-slate-200 w-4/5 flex justify-between'>
        <button onClick={() => handleButton("pomodoro", 25)}>
          <h2>pomodoro</h2>
        </button>
        <button onClick={() => handleButton("short break", 5)}>
          <h2>short break</h2>
        </button>
        <button onClick={() => handleButton("long break", 15)}>
          <h2>long break</h2>
        </button>
      </div>
      <div>
        <CountDown startMinutes={startMinutes} />
      </div>
    </section>
  )
}

export default Counters
