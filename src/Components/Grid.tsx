import GridIMG from '../assets/imgs/grid.png'

export default function Grid () {
  return (
    <div className='absolute'>
      <img id='bg' className='w-screen h-[820px] object-cover opacity-20 z-10' src={GridIMG} alt=""/>
      <img id='bg' className='w-screen h-[820px] object-cover opacity-20 z-10' src={GridIMG} alt=""/>
      <img id='bg' className='w-screen h-[820px] object-cover opacity-20 z-10' src={GridIMG} alt=""/>
      <img id='bg' className='w-screen h-[820px] object-cover opacity-20 z-10' src={GridIMG} alt=""/>
    </div>
  )
}