import {TypeAnimation} from "react-type-animation"

function Header() {
  return (
    <header className='w-screen h-[80vh] flex items-center justify-start'>
      <div className="w-[75%] flex justify-center items-center">
        <div className='z-10 flex flex-col items-start'>
          <TypeAnimation className='w-[700px] font-[600] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'
            sequence={[
              'Backend Developer —',
                1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '70px', display: 'inline-block'  }}
            repeat={Infinity}
          />
          <h2 className='z-10 w-[84%] text-[20px] font-[200] text-gray-800 -mt-4 ml-[2px] flex justify-between bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>
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
      </div>

    </header>
  )
}

export default Header