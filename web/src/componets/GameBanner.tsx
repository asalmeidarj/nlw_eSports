interface GameBannerProps {
  id: string,
  bannerUrl: string,
  title: string,
  adsCount: number
}

const GameBanner = (props: GameBannerProps) => {
  return (
    <a href='' id={props.id} className='relative rounded-lg overflow-hidden'>
      <img src={props.bannerUrl}></img>
      <div className='w-full pt-16 pl-4 pb-4 bg-shadow-gradient absolute bottom-0 rounded-md'>
        <strong className='text-white text-base blokck'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}

export default GameBanner;

