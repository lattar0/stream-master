import { AboutContainer } from '@/components/AboutContainer';

import joaoImg from '../../public/peoples/joao.jpg'
import fabriciaImg from '../../public/peoples/fabricia.jpg'
import gabrielImg from '../../public/peoples/gabriel.jpg'
import victorImg from '../../public/peoples/victor.jpg'
import gutierreImg from '../../public/peoples/gutierre.jpg'
import matheusImg from '../../public/peoples/matheus.jpg'


export default function About() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='flex flex-row gap-8'>
        <AboutContainer image={joaoImg} name='João Francisco' github='lattar0' />
        <AboutContainer image={fabriciaImg} name='Fabrícia' github='FabriciaAssis' />
        <AboutContainer image={gabrielImg} name='Gabriel' github='DevGabrielVictorCA' />
      </div>
      <div className='flex flex-row gap-8'>
        <AboutContainer image={victorImg} name='Victor' github='VictorFerreira44' />
        <AboutContainer image={gutierreImg} name='Gutierre' github='BrenoGutierre' />
        <AboutContainer image={matheusImg} name='Matheus'/>
      </div>
    </main>
  );
}
