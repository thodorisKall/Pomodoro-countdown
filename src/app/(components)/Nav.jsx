import Link from "next/link"
import Image from "next/image"
import { RiSettings3Fill } from "react-icons/ri"

const Nav = () => {
  return (
    <nav className='topNav h-48  flex justify-around'>
      <Image
        src='/images/pomodoro-logo.png'
        width={500}
        height={50}
        quality={100}
        alt='pomodoro-logo'
      />
      <div className='flex justify-around items-center w-1/3 '>
        <Link href='/settings' className='text-orange text-3xl'>
          <RiSettings3Fill />
        </Link>
        <Link href='about' className='bg-orange text-lg py-2 px-4 rounded-3xl '>
          <h2>What is Pomodoro</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
