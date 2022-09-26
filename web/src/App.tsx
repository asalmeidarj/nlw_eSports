import logoImage from './assets/logo.svg'
import './styles/app.css'

import CreateAdBanner from './componets/CreateAdBanner'
import GameBanner from './componets/GameBanner'
import CheckboxComponent from './componets/CheckBoxComponent'

import * as Dialog from '@radix-ui/react-dialog';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

import * as SelectComponents from './componets/SelectComponent'
import { Input } from './componets/InputComponent'

import { useEffect, useState } from 'react'
import { Atom, GameController, MagnifyingGlassPlus } from 'phosphor-react'
import ButtonComponent from './componets/ButtonComponent/ButtonComponent'



// Componentes Radix-UI for Select
const Select = SelectComponents.Select;
const SelectValue = SelectComponents.SelectValue;
const SelectIcon = SelectComponents.SelectIcon;
const SelectTrigger = SelectComponents.SelectTrigger;
const SelectGroup = SelectComponents.SelectGroup;
const SelectViewport = SelectComponents.SelectViewport
const SelectContent = SelectComponents.SelectContent;
const SelectItem = SelectComponents.SelectItem;
const SelectItemText = SelectComponents.SelectItemText;
const SelectItemIndicator = SelectComponents.SelectItemIndicator;
const SelectLabel = SelectComponents.SelectLabel;
/*const SelectSeparator = SelectComponents.SelectSeparator;*/
const SelectScrollUpButton = SelectComponents.SelectScrollUpButton;
const SelectScrollDownButton = SelectComponents.SelectScrollDownButton;


interface Ad {

}

interface Game {
  _id: string,
  bannerUrl: string,
  title: string,
  numberAds: number,
}

interface StatusDays {
  mon: boolean,
  tue: boolean,
  wed: boolean,
  thu: boolean,
  fri: boolean,
  sat: boolean,
  sun: boolean
}

let varStatusDays: StatusDays = {
  mon: false,
  tue: false,
  wed: false,
  thu: false,
  fri: false,
  sat: false,
  sun: false
}

interface Day {
  name: string,
  text: string
  status: boolean
}

let arrDays: Day[] = [
  { name: 'mon', status: false, text: 'S' },
  { name: 'tue', status: false, text: 'T' },
  { name: 'wed', status: false, text: 'Q' },
  { name: 'thu', status: false, text: 'Q' },
  { name: 'fri', status: false, text: 'S' },
  { name: 'sat', status: false, text: 'S' },
  { name: 'sun', status: false, text: 'D' }
]

function App() {

  const [games, setGames] = useState<Game[]>([])

  const [playerName, setPlayerName] = useState<string>('')
  const [yearsPlaying, setYearsPlaying] = useState<string>('')
  const [discord, setDiscord] = useState<string>('')
  const [hours, setHours] = useState<string[]>(['', ''])
  const [statusDays, setStatusDays] = useState<StatusDays>(varStatusDays)
  const [days, setDays] = useState<Day[]>(arrDays)
  const [checked, setChecked] = useState<boolean>(false)


  const handlerChecked = () => {
    setChecked(!checked)
  }

  const handlerPlayerName = (e: any) => {
    const name = e.target.value
    setPlayerName(name)
  }
  const handlerYearsPlaying = (e: any) => {
    const years = e.target.value
    setYearsPlaying(years)
  }
  const handlerDiscord = (e: any) => {
    const discord = e.target.value
    setDiscord(discord)
  }

  const handlerHours = (e: any) => {
    let h = hours
    if (e.target.id == 'hourStart')
      h[0] = e.target.value
    if (e.target.id == 'hourEnd')
      h[1] = e.target.value
    setHours(h)
  }

  const handlerStatusDays = (e: any) => {
    const day = e.target.id
    triggerDay(day)
  }

  const triggerDay = (day: string) => {
    let newStatusDays = statusDays

    if (day == 'mon')
      newStatusDays.mon = !statusDays.mon
    if (day == 'tue')
      newStatusDays.tue = !statusDays.tue
    if (day == 'wed')
      newStatusDays.wed = !statusDays.wed
    if (day == 'thu')
      newStatusDays.thu = !statusDays.thu
    if (day == 'fri')
      newStatusDays.fri = !statusDays.fri
    if (day == 'sat')
      newStatusDays.sat = !statusDays.sat
    if (day == 'sun')
      newStatusDays.sun = !statusDays.sun

    setStatusDays(newStatusDays)
    handlerSetDays(newStatusDays)
  }

  const handlerSetDays = (obj: StatusDays) => {
    let arrDays: Day[] = [
      { name: 'mon', status: obj.mon, text: 'S' },
      { name: 'tue', status: obj.tue, text: 'T' },
      { name: 'wed', status: obj.wed, text: 'Q' },
      { name: 'thu', status: obj.thu, text: 'Q' },
      { name: 'fri', status: obj.fri, text: 'S' },
      { name: 'sat', status: obj.sat, text: 'S' },
      { name: 'sun', status: obj.sun, text: 'D' }
    ]

    setDays(arrDays)
  }

  const renderDivDays = (day: Day) => {
    let classNameString = 'days '
    if (day.status) {
      classNameString += 'day-active'
      return (
        <div className={classNameString} id={day.name} onClick={handlerStatusDays}>{day.text}</div>
      )
    }
    return (
      <div className={classNameString} id={day.name} onClick={handlerStatusDays}>{day.text}</div>
    )
  }

  useEffect(() => {

    const urlBase = 'http://localhost:'

    async function useFetch() {
      const datas = await fetch(urlBase + '/games')
        .then(res => res.json())
        .then(doc => {
          setGames(doc.data)
          let games: Game[] = [...doc.data]
          return games
        })

      let temp: Game[] = []
      for (const data of datas) {
        data.numberAds = await fetch(urlBase + '/games/' + data._id + '/number-ads')
          .then(res => res.json())
          .then(doc => {
            let num: number = doc.number
            return num
          })
        temp.push(data)
      }
      setGames(temp)
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
          {games && games.map((game, index) => (
            <GameBanner
              key={index}
              id={game._id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game.numberAds}
            />
          ))}
        </section>
        <Dialog.Root>
          <CreateAdBanner />
          <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
              <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
              <form>
                <div className='mt-8 flex flex-col'>
                  <label htmlFor="select-game">Qual o game?</label>
                  <Select>
                    <SelectTrigger className='mt-4 bg-[#18181B] flex justify-between' aria-label="game">
                      <SelectValue placeholder="Selecione um game" />
                      <SelectIcon>
                        <ChevronDownIcon />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectContent className='w-[85%] px-4 py-6 fixed top-[20%] left-[50%] -translate-x-1/2'>
                      <SelectScrollUpButton>
                        <ChevronUpIcon />
                      </SelectScrollUpButton>
                      <SelectViewport>
                        <SelectGroup>
                          <SelectLabel>Games</SelectLabel>
                          <SelectItem value="Cs_Go">
                            <SelectItemText>Cs Go</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                          <SelectItem value="Dota">
                            <SelectItemText>Dota</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                          <SelectItem value="ClashRoyal">
                            <SelectItemText>Clash Royal</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                          <SelectItem value="Fortinite">
                            <SelectItemText>Fortinite</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                          <SelectItem value="APEX">
                            <SelectItemText>APEX</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        </SelectGroup>
                      </SelectViewport>
                      <SelectScrollDownButton>
                        <ChevronDownIcon />
                      </SelectScrollDownButton>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex flex-col mt-4 gap-4'>
                  <label htmlFor="playerName">Seu nome (ou nickname)</label>
                  <Input autoComplete="off" className="input-ads" id="playerName" onChange={handlerPlayerName} placeholder='Como te chamam dentro do game?' value={playerName}></Input>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className='w-[50%]'>
                    <label htmlFor="yearsPlaying">Quanto tempo joga?</label>
                    <Input autoComplete="off" className="input-ads w-[84%] mt-4" id="yearsPlaying" onChange={handlerYearsPlaying} placeholder='Pode ser zero' value={yearsPlaying}></Input>
                  </div>
                  <div className='w-[50%]'>
                    <label htmlFor="discord">Qual o seu discord?</label>
                    <Input autoComplete="off" className="input-ads w-[84%] mt-4" id="discord" onChange={handlerDiscord} placeholder='usuario#0000' value={discord}></Input>
                  </div>
                </div>
                <div className='agenda'>
                  <div className='div-agenda-esquerda'>
                    <label>Quando costuma jogar?</label>
                    <div className='box-days'>
                      {days.map((day) => (
                        renderDivDays(day)
                      ))}
                    </div>
                  </div>
                  <div className='div-agenda-direita'>
                    <label>Qual horário do dia?</label>
                    <div className='flex gap-2'>
                      <Input autoComplete="off" className="input-ads w-[84%] mt-4" id="hourStart" type="number" min='0' max='23' onChange={handlerHours} placeholder='De'></Input>
                      <Input autoComplete="off" className="input-ads w-[84%] mt-4" id="hourEnd" type="number" min='0' max='23' onChange={handlerHours} placeholder='Até'></Input>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <CheckboxComponent
                    styled="bg-[#18181B]"
                    text={'Costumo me conectar ao chat de voz'}
                    checked={handlerChecked}
                  />
                </div>
                <div className='mt-8 flex gap-4 flex-row-reverse'>
                  <ButtonComponent
                    text='Encontrar duo'
                    iconComponent={Atom}
                  />
                  <ButtonComponent
                    width='108px'
                    backgroundColor="#71717A"
                    hoverBackground="rgb(239 68 68 / 1)"
                    text="Cancelar"
                  />
                </div>
              </form>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </main>
    </div>
  )
}

export default App
