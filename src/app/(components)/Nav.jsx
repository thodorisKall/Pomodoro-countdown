import Link from "next/link"
import { RiSettings3Fill } from "react-icons/ri"

const Nav = () => {
  return (
    <nav className='py-4 flex justify-end '>
      <div className='flex justify-around items-center px-2 w-1/3 '>
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
