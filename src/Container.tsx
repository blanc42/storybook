import React from 'react'


// This container place items in the center of the view

const Container = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className='grid place-content-center w-screen h-screen'>
        {children}
    </div>
  )
}

export default Container