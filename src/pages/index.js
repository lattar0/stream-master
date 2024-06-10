import Image from 'next/image';
import movieImg from '../../public/movie.svg'

export default function Home() {
  return (
    <main className='flex flex-col p-4 sm:flex-row items-center justify-center sm:max-w-4xl sm:h-[calc(100vh - 10rem)] sm:my-14 mt-8 mx-auto sm:text-2xl text-sm'>
      <div className='flex flex-col gap-6 items-center sm:items-start'>
        <h1 className='font-bold text-4xl'>
          Filmes ilimitados, <br />
          show de TV e mais
        </h1>

        <p>Assista os melhores e mais recentes filmes e séries,<br />todos
          disponíveis no Stream Master.
        </p>

        <div className='flex flex-row gap-2 items text-base sm:text-2xl'>
          <a href="#" className='py-3 px-7 bg-red-700 rounded-full hover:bg-red-900'>
            Começar!
          </a>

          <a href="#" className='py-3 px-7 bg-neutral-600 rounded-full hover:bg-neutral-800'>
            Ver Preços
          </a>
        </div>
      </div>

      <aside>
        <Image alt='Assistindo filmes e séries' src={movieImg} className=' max-sm:w-72'/>
      </aside>
    </main>
  );
}
