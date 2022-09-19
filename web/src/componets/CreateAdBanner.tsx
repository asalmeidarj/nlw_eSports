import { MagnifyingGlassPlus } from 'phosphor-react'

const CreateAdBanner = () => {
  return (
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
  )
}

export default CreateAdBanner