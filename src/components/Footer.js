import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

export function Footer() {
  return (
    <footer className='w-screen flex flex-col items-center justify-center gap-3 bg-neutral-900 py-4 fixed left-0 bottom-0'>
      <div className='flex flex-row gap-4'>
        <a href="#" className='bg-neutral-800 rounded-full p-1'>
          <AiOutlineInstagram size={28} color='gray'/>
        </a>

        <a href="#" className='bg-neutral-800 rounded-full p-1'>
          <AiOutlineTwitter size={28} color='gray'/>
        </a>

        <a href="#" className='bg-neutral-800 rounded-full p-1'>
          <AiOutlineGithub size={28} color='gray'/>
        </a>
      </div>

      <div className='flex flex-row justify-center items-center gap-6'>
        <Link href="/" className='hover:text-red-700'>
          Home
        </Link>

        <Link href="about" className='hover:text-red-700'>
          Sobre nós
        </Link>

        <Link href="/documentacao.pdf" className='hover:text-red-700 text-center' target='_blank' rel='noopener noreferrer'>
          Termos e Documentação
        </Link>
      </div>

      <span className='text-neutral-500'>
        Copyright 2024; Desenvolvido por João Francisco
      </span>
    </footer>
  )
}
