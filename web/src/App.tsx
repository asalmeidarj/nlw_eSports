import logoImage from './assets/logo.svg'
import './styles/app.css'
import CreateAdBanner from './componets/CreateAdBanner'
import GameBanner from './componets/GameBanner'
import { useEffect, useState } from 'react'

interface Ad {

}

interface Game {
  _id: string,
  bannerUrl: string
  title: string
  ads?: []
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {

    async function useFetch(){
      const datas = await fetch('http://localhost:8080/games')
      .then( res => res.json())
      .then( doc => {
        setGames(doc.data)
        return doc.data
      })
      
      for(const data of datas){

      }

    }
    useFetch()
  }, [])

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
          {games && games.map((game, index)=>(
            <GameBanner key={index} id={game._id} bannerUrl={game.bannerUrl} title={game.title} adsCount={0}/>
          ))}
        </section>
        <CreateAdBanner />

      </main>
    </div>
  )
}

export default App
