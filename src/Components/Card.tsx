function Card (props: { link: string, title: string, content: string, img: string }) {
  return (
    <a className='mr-12' href={ props.link } target='_blank'>
      <img className='w-80 h-48 object-cover rounded-xl mb-2 hover:-translate-y-2 transition duration-300' src={ props.img } alt=""/>
      <div className='font-[600] text-[25px]'>{ props.title }</div>
      <div className='font-[400] text-[18px] w-80 text-gray-500'>{ props.content }</div>
    </a>
  )
}

export default Card