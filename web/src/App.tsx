import logoImage from './assets/logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'
import './styles/app.css'

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-12">
      <header>
        <img src={logoImage} alt="logo da nlw eSport" />
      </header>
      <main className='flex flex-col items-center'>
        <h1 className='text-6xl text-white font-black mt-20'>
          Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
        </h1>
        <section className='games max-w-[1344px] max-h-[240px] flex gap-6 mt-16'>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/img/game-1.png'></img>
            <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
              <strong className='text-white text-base blokck'>League of Legend</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/img/game-2.png'></img>
            <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
              <strong className='text-white text-base blokck'>Dota</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/img/game-3.png'></img>
            <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
              <strong className='text-white text-base blokck'>Counter Strike</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/img/game-4.png'></img>
            <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
              <strong className='text-white text-base blokck'>APEX legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/img/game-5.png'></img>
            <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
              <strong className='text-white text-base blokck'>Fortinite</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/img/game-6.png'></img>
            <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
              <strong className='text-white text-base blokck'>World warcraft</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
        </section>
        <section className='min-w-full max-w-[1200px]'>
          <div className='px-8 py-6  h-[112px] bg-[#2A2634] flex justify-between items-center mt-8'>
            <div className=' flex flex-col'>
              <strong className='text-white'>Não encontrou seu duo?</strong>
              <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <button className='bg-violet-500 w-48 h-12 hover:bg-violet-600 rounded-md flex justify-around px-4 py-3 items-center'>
                <MagnifyingGlassPlus size='24px'color='white'/>
                <span className='text-white'>Plublicar anúncio</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
