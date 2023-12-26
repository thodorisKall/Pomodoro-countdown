import { IoIosClose } from "react-icons/io"
import Link from "next/link"

const page = () => {
  return (
    <section className='about fixed inset-0 z-10 h-full w-full  flex flex-col justify-center items-center'>
      <div className='w-2/3 h-fit bg-transparent bg-opacity-90 bg-light-red p-8'>
        <div className='about-title flex justify-between items-center '>
          <h2>what is Pomodoro Countdown?</h2>
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
            Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to
            break work into intervals, typically 25 minutes in length, separated
            by short breaks. Each interval is known as a pomodoro, from the
            Italian word for tomato, after the tomato-shaped kitchen timer
            Cirillo used as a university student.
          </p>
          <h3>Description</h3>
          <ul>
            <li>Decide on the task to be done.</li>
            <li>Set the Pomodoro timer (typically for 25 minutes)</li>
            <li>Work on the task.</li>
            <li>
              End work when the timer rings and take a short break (typically
              5–10 minutes)
            </li>
            <li>
              Go back to Step 2 and repeat until you complete four pomodoros.
            </li>
            <li>
              After four pomodoros are done, take a long break (typically 20 to
              30 minutes) instead of a short break. Once the long break is
              finished, return to step 2.
            </li>
          </ul>

          <h3>Tips</h3>
          <p>
            After task completion in a Pomodoro, any remaining time should be
            devoted to activities, for example: Review your work just completed
            (optional) Review the activities from a learning point of view (ex:
            What learning objective did you accomplish? What learning outcome
            did you accomplish? Did you fulfill your learning target, objective,
            or outcome for the task?) Review the list of upcoming tasks for the
            next planned pomodoro time blocks, and start reflecting on or
            updating them. Cirillo suggests: Specific cases should be handled
            with common sense: If you finish a task while the Pomodoro is still
            ticking, the following rule applies: If a Pomodoro begins, it has to
            ring. It’s a good idea to take advantage of the opportunity for
            overlearning, using the remaining portion of the Pomodoro to review
            or repeat what you’ve done, make small improvements, and note what
            you’ve learned until the Pomodoro rings.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
