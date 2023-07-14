import {Link} from "react-router-dom"
import {useState} from "react"
const PUBLIC_URL = process.env.PUBLIC_URL

const user = PUBLIC_URL + '/imgs/user.svg'
const house = PUBLIC_URL + '/imgs/house.svg'

function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <nav className='fixed z-50 w-screen h-[100px] flex justify-start items-start'>
      <Link className='drop-shadow-xl ml-40 p-4 bg-white/75 backdrop-blur-2xl rounded-b-full transition duration-300' to={'/'} onMouseOver={() => setMenu(true)} onMouseOut={() => setMenu(false)}>
        <img className='w-6' src="/imgs/newlogo.png" alt=""/>
      </Link>
      <div id={menu ? 'menu-on' : 'menu-off'} className='-z-10 -ml-14 p-4 w-72 h-14 rounded-br-3xl rounded-bl-[30px] bg-white/70 backdrop-blur-2xl drop-shadow-xl flex justify-end items-center' onMouseOver={() => setMenu(true)} onMouseOut={() => setMenu(false)}>
        <a id={menu ? 'text-on' : 'text-off'} className='opacity-50 mr-6' href='#bg'><img className='w-4' src={house} alt={''} /></a>
        <a id={menu ? 'text-on' : 'text-off'} className='opacity-50 mr-4' href='#pf'><img className='w-3' src={user}  alt={''}/></a>
        {/*<a id={menu ? 'text-on' : 'text-off'} className='opacity-50'><FontAwesomeIcon className='w-6' icon={} /></a>*/}
      </div>

      {/*<div className='ml-44 flex justify-center items-center'>*/}
      {/*  <div className='p-4 bg-white/75 backdrop-blur-2xl rounded-b-3xl'>*/}
      {/*    <a className='opacity-50 mr-8'>Main</a>*/}
      {/*    <a className='opacity-50 mr-8'>Portfolio</a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </nav>
  )
}

export default Navigation