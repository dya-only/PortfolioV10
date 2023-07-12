import {Link} from "react-router-dom"

function Navigation() {
  return (
    <nav className='absolute z-50 w-screen h-[100px] flex justify-around items-center'>
      <Link to={'/'}><img className='w-6 mr-28' src="/imgs/newlogo.png" alt=""/></Link>

      <div className='flex justify-center items-center ml-28'>
        <a className='opacity-50 ml-24 mr-8'>Main</a>
        <a className='opacity-50 mr-8'>Portfolio</a>
        <a className='opacity-50 mr-8'>Contact</a>
        {/*<a className='opacity-50 ml-24 mr-8' href='https://me.dyacode.kro.kr' target='_blank' rel="noreferrer">Notion</a>*/}
        {/*<a className='opacity-50 mr-8' href='https://github.com/dya-only' target='_blank' rel="noreferrer">Github</a>*/}
        {/*<a className='opacity-50' href='https://discord.com/users/884954874943520788' target='_blank' rel="noreferrer">Discord</a>*/}
      </div>
    </nav>
  )
}

export default Navigation