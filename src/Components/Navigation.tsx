function Navigation () {
    return (
        <nav className='fixed z-50 w-screen h-[50px] border-b-gray-200 flex justify-around items-center'>
            <img className='w-6 mr-36' src="/imgs/newlogo.png" alt=""/>

            <div className='flex justify-center items-center ml-36'>
                <a className='opacity-50 ml-24 mr-8' href='https://me.dyacode.kro.kr' target='_blank'>Notion</a>
                <a className='opacity-50 mr-8' href='https://github.com/dya-only' target='_blank'>Github</a>
                <a className='opacity-50' href='https://discord.com/users/884954874943520788' target='_blank'>Discord</a>
            </div>
        </nav>
    )
}

export default Navigation