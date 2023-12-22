import Link from "next/link"
const PomodoroNav = () => {
  return (
    <nav className='bg-red-300 py-4'>
      <div className='flex justify-around text-2xl '>
        <Link href='/'>
          <h2>pomodoro</h2>
        </Link>
        <Link href='/counters/shortBreak/5'>
          <h2>short break</h2>
        </Link>
        <Link href='/counters/longBreak/15'>
          <h2>long break</h2>
        </Link>
      </div>
    </nav>
  )
}

export default PomodoroNav
