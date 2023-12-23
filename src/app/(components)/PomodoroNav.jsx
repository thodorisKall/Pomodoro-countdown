import Link from "next/link"
const PomodoroNav = () => {
  return (
    <nav className='pomodoroNav  py-4 flex justify-center'>
      <div className='flex justify-around text-2xl  w-3/5'>
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
