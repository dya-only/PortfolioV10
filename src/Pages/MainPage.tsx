import {Fragment} from "react"
import Header from "../Components/Header"
import {Link} from "react-router-dom"
import Card from "../Components/Card"
import Award from "../Components/Award"

import Grid from '../assets/imgs/grid.png'
import GitUsr from '../assets/imgs/gitusr.png'
import EntryStory from '../assets/imgs/entry.png'
import Star from '../assets/imgs/star.png'
import Goorm from '../assets/imgs/goorm.jpg'
import Appjam from '../assets/imgs/appjam1.png'

function MainPage() {
  return (
    <Fragment>
      <Header />

      {/* Portfolio */}
      <section className='w-screen h-[85vh] flex xs:justify-center lg:justify-center md:justify-center sm:justify-start items-start xs:ml-0 lg:ml-0 md:ml-0 sm:ml-4'>
        <img id='bg' className='w-screen h-[95%] object-cover absolute opacity-20 z-10' src={Grid} alt=""/>

        <div className='w-[80%] flex flex-col justify-start items-start'>
          <div className="flex flex-col items-start w-[620px] mb-8">
            <Link className='flex items-center' to={'/portfolio'}>
              <div id='pf' className='font-[700] text-3xl z-20 text-slate-700 mr-2'>Portfolio</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </Link>
          </div>

          <div className='flex justify-start items-start flex-wrap'>
            <Card  title={'Github User'} content={'보기 쉽게 깃허브 유저의 정보를 보여줍니다.'} link={'https://github.com/dya-only/Gitusr'} img={GitUsr} stack={['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg']} />
            <Card  title={'EntryStory'} content={'엔트리 커뮤니티인 \'엔트리 이야기\'의 클론 웹사이트입니다.'} link={'https://github.com/dya-only/EntryStory'} img={EntryStory} stack={['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg']} />
            <Card  title={'Star'} content={'현재 위치 주변의 카페들의 위치와 정보, 영업 여부를 보여줍니다.'} link={'https://github.com/dya-only/Gitusr'} img={Star} stack={['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg']} />

            <Link className='z-20 mt-28 w-12 h-12 bg-white drop-shadow-xl rounded-full flex justify-center items-center hover:-translate-y-2 transition duration-300' to={'/portfolio'}>
              <div className='w-[5px] h-[5px] rounded-full bg-blue-500 mr-[2px] ml-[2px]'/>
              <div className='w-[5px] h-[5px] rounded-full bg-blue-500 mr-[2px] ml-[2px]'/>
              <div className='w-[5px] h-[5px] rounded-full bg-blue-500 mr-[2px] ml-[2px]'/>
            </Link>
          </div>
        </div>

        <div></div>
      </section>

      {/* Awards */}
      <section className='w-screen h-screen flex xs:justify-center lg:justify-center md:justify-center sm:justify-start items-start xs:ml-0 lg:ml-0 md:ml-0 sm:ml-4'>
        <img id='bg' className='w-screen h-[95%] object-cover absolute opacity-20 z-10' src={Grid} alt=""/>

        <div className='w-[80%] flex flex-col justify-start items-start'>
          <div className="flex flex-col items-start w-[620px] mb-8">
            <div className='flex items-center'>
              <div id='pf' className='font-[700] text-3xl z-20 text-slate-700 mr-2'>Awards</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start'>
            <Award title={'Goorm High School Algorithm Challange'} img={Goorm} prize={'1st'} />
          </div>
        </div>

        <div></div>
      </section>
    </Fragment>
  )
}

export default MainPage