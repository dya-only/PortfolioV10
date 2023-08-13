function Card (props: { link: string, title: string, content: string, img: string, stack: string[] }) {

  return (
    <a className='mr-8 mb-8 z-20' href={ props.link } target='_blank'>
      <img className='w-80 h-48 object-cover rounded-xl mb-1 hover:-translate-y-2 transition duration-300' src={ props.img } alt=""/>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center'>
          <span className='w-1 h-5 bg-blue-500 mr-2 rounded-full' />
          <div className='font-[600] text-[25px] text-gray-800 mr-2'>{ props.title }</div>
        </div>
        <div className='p-1 rounded-xl drop-shadow-lg flex justify-center items-center bg-white'>{ props.stack.map((el, idx) => <img className='w-5 ml-1 mr-1' src={el} alt={''} /> )}</div>
      </div>
      <div className='font-[400] text-[18px] w-80 text-gray-500'>{ props.content }</div>
    </a>
  )
}

export default Card