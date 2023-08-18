// import { TypeAnimation } from "react-type-animation"

function Header() {
  return (
    <header className='w-screen min-h-[85vh] flex items-center xs:justify-center lg:justify-center md:justify-center sm:justify-start'>
      <div className='w-[80%] flex flex-col justify-start items-start'>
        <h1 id={'title'} className='z-20 text-7xl w-[730px] font-[600] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 xs:ml-0 lg:ml-0 md:ml-0 sm:ml-4'>Student SW Developer</h1>
        {/*<div className='z-20 text-7xl w-[750px] font-[600] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 xs:ml-0 lg:ml-0 md:ml-0 sm:ml-4'>*/}
        {/*  <TypeAnimation*/}
        {/*    sequence={[ 'Student SW Developer', ]}*/}
        {/*    wrapper="h1"*/}
        {/*    speed={40}*/}
        {/*    style={{ fontSize: '4.5rem', display: 'inline-block' }}*/}
        {/*    repeat={1}*/}
        {/*    cursor={false}*/}
        {/*  />*/}
        {/*</div>*/}
        <h2 id={'name'} className='z-10 w-[718px] text-[20px] font-[200] text-gray-800 flex justify-between bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 xs:ml-1 lg:ml-1 md:ml-1 sm:ml-5'>
          <p>B</p>
          <p>O</p>
          <p>S</p>
          <p>E</p>
          <p>O</p>
          <p>K</p>
          <p>S</p>
          <p>O</p>
          <p>N</p>
        </h2>
      </div>
    </header>
  )
}

export default Header