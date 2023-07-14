import {Fragment} from "react"
import Header from "../Components/Header"
import {Link} from "react-router-dom"
import Card from "../Components/Card"

function MainPage() {
  return (
    <Fragment>
      <img id='bg' className='w-screen h-screen object-cover absolute opacity-20 z-10' src="/imgs/grid.png" alt=""/>
      <Header/>

      <img className='mt-36 w-screen h-screen object-cover absolute opacity-20 z-10' src="/imgs/grid.png" alt=""/>

      <section className='w-screen flex flex-col items-center'>
        <div className='flex justify-start items-center w-[70%] mb-6'>
          <div id='pf' className='font-[700] text-3xl z-20 text-slate-700 mr-2'>Portfolio</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg>
        </div>

        <div className='w-[70%] flex justify-start items-start z-20'>
          <Card  title={'Github User'} content={'보기 쉽게 깃허브 유저의 정보를 보여줍니다.'} link={'https://github.com/dya-only/Gitusr'} img={'/imgs/gitusr.png'} />
          <Card  title={'EntryStory'} content={'엔트리 커뮤니티인 \'엔트리 이야기\'의 클론 웹사이트입니다.'} link={'https://github.com/dya-only/EntryStory'} img={'/imgs/entry.png'} />
          <Card  title={'Star'} content={'현재 위치 주변의 카페들의 위치와 정보, 영업 여부를 보여줍니다.'} link={'https://github.com/dya-only/Gitusr'} img={'/imgs/star.png'} />

          <Link className='mt-28 w-12 h-12 bg-white drop-shadow-xl rounded-full flex justify-center items-center hover:-translate-y-2 transition duration-300' to={'/portfolio'}>
            <div className='w-[6px] h-[6px] rounded-full bg-gray-500 mr-1 ml-[6px]'/>
            <div className='w-[6px] h-[6px] rounded-full bg-gray-500 mr-1 ml-1'/>
            <div className='w-[6px] h-[6px] rounded-full bg-gray-500 mr-[6px] ml-1'/>
          </Link>
        </div>
      </section>
    </Fragment>
  )
}

export default MainPage