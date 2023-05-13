import React, { useRef } from 'react'

const Test = () => {
  
    const boxRef = useRef<HTMLDivElement>(null)

    const handleMoveLeft = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if ( boxRef.current) {
            boxRef.current.style.left = `${boxRef.current.offsetLeft - 20}px`;
        }
    }

    const handleMoveRight = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if ( boxRef.current) {
            boxRef.current.style.left = `${boxRef.current.offsetLeft + 20}px`;
        }
    }

    return (
    <div>
        <div ref={boxRef} className='h-[200px] absolute w-[200px] bg-orange-400 flex justify-center items-center'>
            box
        </div>

        <div className='bottom-0 relative'>
        <button onClick={handleMoveLeft}>
            Move Left
        </button>
        <button onClick={handleMoveRight}>
            Move Right
        </button>
        </div>
    </div>
  )
}

export default Test