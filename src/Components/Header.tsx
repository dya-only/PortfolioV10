function Header() {
    return (
        <header className='w-screen h-[95vh] flex items-center justify-start'>
            <div className="w-[75%] flex justify-center items-center">
                <img className='w-[100px] mr-8 z-10' src="/imgs/newlogo.png" alt=""/>

                <div className='z-10'>
                    <h1 className='text-[70px] font-[600]'><span className='text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Boseok Son</span> —</h1>
                    <h2 className='text-[65px] font-[500] text-gray-800 -mt-8'>Student Developer.</h2>
                </div>
            </div>

        </header>
    )
}

export default Header