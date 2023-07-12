import {useEffect, useState} from "react"

function NavigationBG () {
    const [pos, setPos] = useState(0)
    const [isDown, setIsDown] = useState('up')

    const onScroll = () => {
        setPos(window.scrollY)

        if (pos > 100) {
            setIsDown('down')
        } else {
            setIsDown('up')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [onScroll])

    return (
        <div id={isDown} className='fixed z-40 w-screen h-[50px] bg-white/90 backdrop-blur-2xl' />
    )
}

export default NavigationBG