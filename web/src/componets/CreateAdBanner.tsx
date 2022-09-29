import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

const CreateAdBanner = () => {
  return (
    <section className='min-w-full max-w-[1200px]'>
          <div className='px-8 h-[112px] bg-[#2A2634] flex justify-between items-center'>
            <div className=' flex flex-col'>
              <strong className='text-white'>Não encontrou seu duo?</strong>
              <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <Dialog.Trigger className='bg-violet-500 w-48 h-12 hover:bg-violet-600 rounded-md flex justify-around px-4 py-3 items-center'>
                <MagnifyingGlassPlus size='24px'color='white'/>
                <span className='text-white'>Plublicar anúncio</span>
            </Dialog.Trigger>
          </div>
    </section>
  )
}

export default CreateAdBanner