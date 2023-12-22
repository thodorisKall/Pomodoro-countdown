import Link from "next/link"
import { AiOutlineClose } from "react-icons/ai"

const About = () => {
  return (
    <div className='form-wrap flex justify-center items-start relative z-100'>
      <div className='w-1/4 h-1/4'>
        <Link href='/'>
          <AiOutlineClose />
        </Link>
        <form className='bg-red-400 flex flex-col justify-normal  px-4'>
          <label>pomodoro</label>
          <input type='text' />
          <label>short break</label>
          <input type='text' />
          <label>long break</label>
          <input type='text' />
          <button type='submit'>save</button>
        </form>
      </div>
    </div>
  )
}

export default About
