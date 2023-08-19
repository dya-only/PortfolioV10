import Logo from '../assets/imgs/newlogo.png'

function Navigation() {
  return (
    <nav className='fixed z-50 w-screen h-[100px] flex justify-around items-start'>
      <div className="flex justify-start items-start w-[900px]">
        <button className='drop-shadow-xl p-4 bg-white/75 backdrop-blur-2xl rounded-b-full transition duration-300' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className='w-6' src={Logo} alt=""/>
        </button>
        {/* <div id={menu ? 'menu-on' : 'menu-off'} className='-z-10 -ml-14 p-4 w-64 h-14 rounded-br-3xl rounded-bl-[30px] bg-white/50 backdrop-blur-2xl drop-shadow-xl flex justify-end items-center'>
          <a id={menu ? 'text-on' : 'text-off'} className='z-60 opacity-50 mr-6 cursor-pointer' href='#pfSection'><img className='w-4' src={house} alt={''} /></a>
          <a id={menu ? 'text-on' : 'text-off'} className='z-60 opacity-50 mr-4 cursor-pointer' href='#pf'><img className='w-3' src={user}  alt={''}/></a>
        </div> */}
      </div>

      <div></div>
    </nav>
  )
}

export default Navigation