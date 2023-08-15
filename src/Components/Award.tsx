export default function Award (props: { title: string, img: string, prize: string }) {
  return (
    <div className='flex mr-8 mb-8 z-20'>
      <img className='w-[400px] h-[250px] object-cover rounded-xl mb-1 hover:-translate-y-2 transition duration-300' src={ props.img } alt=""/>
      <div className='flex flex-col justify-center items-start ml-8'>
        <p className='font-[600] text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300'>{ props.prize }</p>
        <span className='w-10 h-1 bg-gradient-to-r from-cyan-400 to-pink-300 rounded-full' />
        <div className='font-[600] text-[30px] text-gray-800'>{ props.title }</div>
      </div>
    </div>
  )
}