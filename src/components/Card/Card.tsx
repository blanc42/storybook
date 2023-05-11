import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
        <img src="/vite.svg" alt="" />
        <div className='description'>
            <h3>Card Title</h3>
            <p>Description about the card</p>
        </div>
    </div>
  )
}

export default Card