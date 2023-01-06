import React from 'react'
import Card from './Card'
const CardList = ({card}) => {
  return (
    <div>
          {card.map(elm=><Card elm={elm}/>)}
    </div>
  )
}

export default CardList