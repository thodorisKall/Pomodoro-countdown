import Link from "next/link"
import { RiSettings3Fill } from "react-icons/ri"

const Nav = () => {
  return (
    <nav>
      <div className='flex justify-end items-center w-1/2'>
        <Link href='/settings'>
          <RiSettings3Fill />
        </Link>
        <Link href='about'>
          <h2>What is Pomodoro</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
