import {Fragment} from "react"
import Header from "../Components/Header"

function MainPage() {
    return (
        <Fragment>
            <img className='w-screen h-screen object-cover absolute opacity-20 z-10' src="/imgs/grid.png" alt=""/>
            <Header />

            <img className='mt-5 w-screen h-screen object-cover absolute opacity-20 z-10' src="/imgs/grid.png" alt=""/>
            <section className='w-screen h-[80vh] flex justify-center'>
                <div className="w-[70%] h-full flex justify-start items-center">
                    <img className='w-12 h-12 mr-6' src="/imgs/gbsw.png" alt=""/>
                    <div>
                        <h3 className='text-2xl font-[600]'>누구보다 열정있게 배워나가는,</h3>
                        <h2 className='text-3xl font-[600]'>저는 <span className='font-[800] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>경북소프트웨어고등학교 3기</span> <span className='font-[900] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>손보석</span>입니다.</h2>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MainPage