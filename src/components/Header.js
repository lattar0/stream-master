import Image from 'next/image';
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";

import logoImg from '../../public/logo.png'
import Link from 'next/link';

export function Header() {
  return (
    <header className='flex flex-row gap-6 items-center w-screen md:justify-around justify-center p-3'>
      <Link href='/'><Image
        alt='Logo do site'
        src={logoImg}
        className='object-contain sm:w-28 w-32'
      /></Link>

      <nav className='flex items-center'>
        <ul className='flex flex-row items-center gap-8 text-xl'>
          <li className='hover:text-red-700 hidden sm:flex'>
            <Link href="/">Home</Link>
          </li>

          <li className='hover:text-red-700 hidden sm:flex'>
            <a href="#">Filmes</a>
          </li>

          <li className='hover:text-red-700 hidden sm:flex'>
            <a href="#">Séries</a>
          </li>

          <li className='hover:text-red-700 hidden sm:flex'>
            <a href="#">Preços</a>
          </li>
        </ul>
      </nav>

      <div className='flex flex-row gap-4 text-3xl'>
        <a href="#">
          <AiOutlineSearch className='hover:text-red-700' />
        </a>

        <a href="#">
          <AiOutlineUser className='hover:text-red-700' />
        </a>
      </div>
    </header>

  )
}
