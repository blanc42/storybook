import React from 'react'

const Card = ({ text } : {text : string} ) => {
  return (
    <div key={text} className='h-[280px] min-w-[180px] flex justify-center items-center font-extrabold text-9xl bg-black text-white rounded-md hover:text-purple-400'>
        {text}
    </div>
  )
}

export default Card