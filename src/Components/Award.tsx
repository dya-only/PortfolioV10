export default function Award(props: { title: string, img: string, prize: string, type: number, dir: number }) {
  return (!props.dir ?
      <div className='flex mb-12 z-20'>
        <img className='w-[400px] h-[250px] object-cover rounded-xl mb-1 hover:-translate-y-2 transition duration-300' src={ props.img } alt=""/>
        <div className='flex flex-col justify-center items-start sm:ml-0 xs:ml-8 lg:ml-8 md:ml-8'>
          <p className='font-[600] text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300'>{ props.prize }</p>
          { props.type === 2 ? <span className='w-10 h-1 bg-gradient-to-r from-cyan-400 to-pink-300 rounded-full' />
          : <span className='w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-300 rounded-full' /> }
          <div className='font-[600] text-[28px] text-gray-800 w-auto sm:w-[500px]'>{ props.title }</div>
        </div>
      </div>

      : <div className='flex mb-12 z-20'>
        <div className='flex flex-col justify-center items-end mr-8'>
          <p
            className='font-[600] text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300'>{props.prize}</p>
          {props.type === 2 ? <span className='w-10 h-1 bg-gradient-to-r from-cyan-400 to-pink-300 rounded-full'/>
            : <span className='w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-300 rounded-full'/>}
          <div className='font-[600] text-[28px] text-gray-800'>{props.title}</div>
        </div>
        <img className='w-[400px] h-[250px] object-cover rounded-xl mb-1 hover:-translate-y-2 transition duration-300'
             src={props.img} alt=""/>
      </div>
  )
}