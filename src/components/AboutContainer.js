import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

export function AboutContainer({ image, name, github }) {
  return (
    <div className='flex flex-col items-center gap-2 mt-8'>
      <Image alt='Foto do integrante da equipe' src={image} className='sm:w-44 sm:h-44 w-20 h-20 object-cover rounded-full' />
      <span>{name}</span>
      {github ? <a href={`https://github.com/${github}`} target='_blank' >
        <AiFillGithub size={28} className='hover:opacity-75 transition-opacity' />
      </a> : ''}
    </div>
  )
}
