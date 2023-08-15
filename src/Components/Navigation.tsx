import {Link} from "react-router-dom"
import {useState} from "react"

import Logo from '../assets/imgs/newlogo.png'
import user from '../assets/imgs/user.svg'
import house from '../assets/imgs/house.svg'

function Navigation() {
  const [menu, setMenu] = useState(false)

  const getMenu = () => {
    if (menu) setMenu(false)
    else setMenu(true)
  }

  return (
    <nav className='fixed z-50 w-screen h-[100px] flex justify-around items-start'>
      <div className="flex justify-start items-start w-[900px]">
        <Link className='drop-shadow-xl p-4 bg-white/75 backdrop-blur-2xl rounded-b-full transition duration-300' to={'/'} onClick={getMenu}>
          <img className='w-6' src={Logo} alt=""/>
        </Link>
        <div id={menu ? 'menu-on' : 'menu-off'} className='-z-10 -ml-14 p-4 w-64 h-14 rounded-br-3xl rounded-bl-[30px] bg-white/50 backdrop-blur-2xl drop-shadow-xl flex justify-end items-center'>
          <a id={menu ? 'text-on' : 'text-off'} className='opacity-50 mr-6' href='#bg'><img className='w-4' src={house} alt={''} /></a>
          <a id={menu ? 'text-on' : 'text-off'} className='opacity-50 mr-4' href='#pf'><img className='w-3' src={user}  alt={''}/></a>
        </div>
      </div>

      <div></div>
    </nav>
  )
}

export default Navigation