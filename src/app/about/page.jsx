import { IoIosClose } from "react-icons/io"
import Link from "next/link"

const page = () => {
  return (
    <section className='about fixed inset-0 z-10 h-full w-full flex flex-col justify-center items-center'>
      <div className='w-5/6 h-4/5 bg-transparent bg-opacity-90 bg-light-red p-8 overflow-y-scroll lg:w-2/3 lg:h-fit lg:overflow-hidden'>
        <div className='about-title flex justify-between items-center '>
          <h2 className='text-base lg:text-2xl'>what is Pomodoro Countdown?</h2>
          <button className='text-5xl'>
            <Link href='/'>
              <IoIosClose />
            </Link>
          </button>
        </div>
        <div>
          <h3>Technique</h3>
          <p>
            The Pomodoro Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. It uses a timer to break work
            into intervals, traditionally 25 minutes in length, separated by
            short breaks. Each interval is known as a "pomodoro", from the
            Italian word for 'tomato', inspired by the tomato-shaped kitchen
            timer Cirillo used as a university student.
          </p>
          <h3>Description</h3>
          <p>
            The Pomodoro Technique is a productivity method that involves
            working in 25-minute focused bursts, known as "pomodoros", followed
            by 5-minute breaks. After four pomodoros, a longer break of 15-30
            minutes is recommended. This approach is designed to boost
            efficiency and maintain consistent attention, preventing burnout and
            managing distractions.
          </p>

          <h3>Tips</h3>
          <p>
            Set Clear Goals: Before starting a pomodoro, know exactly what you
            plan to work on. Setting specific, achievable goals for each
            interval increases effectiveness. Minimize Interruptions: Inform
            those around you of your technique to avoid interruptions. Turn off
            notifications and distractions on your devices. Stick to the Timer:
            Honor the 25-minute work period and the break times strictly. Don’t
            skip breaks, as they are crucial for maintaining sustained focus.
            Track Progress: Keep a log of completed pomodoros to monitor
            productivity and plan future tasks more effectively. Adjust as
            Needed: While 25 minutes is standard, feel free to adjust the length
            of the pomodoros and breaks to better suit your personal rhythm and
            the nature of your tasks.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
