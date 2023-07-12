import {Fragment} from "react"
import Header from "../Components/Header"
import {Link} from "react-router-dom"

function MainPage() {
    return (
        <Fragment>
            <img className='w-screen h-screen object-cover absolute opacity-20 z-10' src="/imgs/grid.png" alt=""/>
            <Header />

            <img className='mt-36 w-screen h-screen object-cover absolute opacity-20 z-10' src="/imgs/grid.png" alt=""/>

            <section className='w-screen flex flex-col items-center'>
              <div className='flex justify-start items-center w-[70%] mb-6'>
                <div className='font-[700] text-3xl z-20 text-slate-700 mr-2'>Portfolio</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
              </div>

              <div className='w-[70%] flex justify-start items-start z-20'>
                <a className='mr-12' href='https://github.com/dya-only/Gitusr' target='_blank'>
                  <img className='w-80 rounded-xl mb-2 hover:-translate-y-2 transition duration-300' src="https://file.notion.so/f/s/cb32ffb1-351f-495d-ba14-7c394ce45441/Untitled.png?id=da747160-14fa-4b06-8a95-0e284a6be131&table=block&spaceId=0cc37953-442f-4e8e-afcd-8b31fc878afb&expirationTimestamp=1689220800000&signature=1lek8l6r2VFdUqGVwARDYpmuLIx4YvBJ9QrMplXeYqA&downloadName=Untitled.png" alt=""/>
                  <div className='font-[600] text-[25px]'>Github User</div>
                  <div className='font-[400] text-[18px] w-80 text-gray-500'>보기 쉽게 깃허브 유저의 정보를 보여줍니다.</div>
                </a>

                <a className='mr-12' href='https://github.com/dya-only/EntryStory' target='_blank'>
                  <img className='w-80 rounded-xl mb-2 hover:-translate-y-2 transition duration-300' src="https://file.notion.so/f/s/d4c6ab92-c832-4d71-8a4a-80ece8932bc9/Untitled.png?id=a490f32f-e1c4-4011-97e8-1376cf9a8f07&table=block&spaceId=0cc37953-442f-4e8e-afcd-8b31fc878afb&expirationTimestamp=1689220800000&signature=TLjdKxGTX7EIKdxphXiGHsKiP91h2QkTWioXqO-s73w&downloadName=Untitled.png" alt=""/>
                  <div className='font-[600] text-[25px]'>EntryStory</div>
                  <div className='font-[400] text-[18px] w-80 text-gray-500'>엔트리 커뮤니티인 '엔트리 이야기'의 클론 웹사이트입니다.</div>
                </a>

                <a className='mr-12' href='https://github.com/dya-only/Star' target='_blank'>
                  <img className='w-80 rounded-xl mb-2 hover:-translate-y-2 transition duration-300' src="https://file.notion.so/f/s/c1788a1a-946b-4754-916e-db6ff6791d63/Untitled.png?id=7e7e08a3-883a-4cd2-a8c4-35d88d160c01&table=block&spaceId=0cc37953-442f-4e8e-afcd-8b31fc878afb&expirationTimestamp=1689220800000&signature=8S5J6POZsOoA4SD-7ANJqowP-U1H-AEkhaa8mfbirvo&downloadName=Untitled.png" alt=""/>
                  <div className='font-[600] text-[25px]'>Star</div>
                  <div className='font-[400] text-[18px] w-80 text-gray-500'>현재 위치 주변의 카페들의 위치와 정보, 영업여부를 보여줍니다.</div>
                </a>

                <Link className='mt-28 w-12 h-12 bg-white drop-shadow-xl rounded-full flex justify-center items-center hover:-translate-y-2 transition duration-300' to={'/portfolio'}>
                  <div className='w-[6px] h-[6px] rounded-full bg-gray-500 mr-1 ml-[6px]' />
                  <div className='w-[6px] h-[6px] rounded-full bg-gray-500 mr-1 ml-1' />
                  <div className='w-[6px] h-[6px] rounded-full bg-gray-500 mr-[6px] ml-1' />
                </Link>
              </div>
            </section>
        </Fragment>
    )
}

export default MainPage