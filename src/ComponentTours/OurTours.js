import React from 'react'
import First from '../ComponentsHome/First'
import Card from './Card'
import CardList from './CardList'
import { useState } from 'react'
const OurTours = () => {
    const [card, setCard] = useState([
    {photo:'https://cdn.paris.fr/paris/2019/10/01/huge-b3661d1d3cb578bc5752cc0d4237d592.jpg',
    titre:'Paris',
    description:'pariparihsjnxkkdhhjwjkxkxixjxjjxn',
    },
    {
        photo:'https://www.voyageur-independant.com/wp-content/uploads/venise-italie-1024x652.jpg',
        titre:'Italie',
        description:'pariparihsjnxkkdhhjwjkxkxixjxjjxn',  
    }])
    console.log(card)
return (
    <div>
<First />

<Card />
<CardList card={card}/>
</div>
)
}

export default OurTours