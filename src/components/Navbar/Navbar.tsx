import React from 'react'

const Navbar = () => {
  return (
    <header className='w-screen lg:px-[15%] md:px-10 py-3 text-xl bg-blue-950 text-white'>
        <nav className='flex justify-between'>
            <img src="/vite.svg" className='w-6 h-6' alt="" />
            <div className='flex gap-4 font-bold'>
                <a href="#">HOME</a>
                <a href="#">CONTACT</a>
                <a href="#">ABOUT</a>
            </div>

        </nav>
    </header>
  )
}

export default Navbar