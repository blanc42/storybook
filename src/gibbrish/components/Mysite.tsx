import React from 'react'

const Mysite = () => {
  return (
    <main className='w-full h-full grid grid-cols-10 mx-[15%]'>
      <div id='sidebar' className='lg:col-span-2 border-2 border-purple-300'>
        sidebar
      </div>
      <div className='col-span-8 border-red-200 border-2'>
        main
      </div>
    </main>
  )
}

export default Mysite