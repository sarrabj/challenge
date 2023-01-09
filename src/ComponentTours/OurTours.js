import React from 'react'
import First from '../ComponentsHome/First'
import CardList from './CardList'
import { useState } from 'react'
const OurTours = () => {
    const [filter,setFilter]=useState('')
    const [tours, setTours] = useState([{
    photo:'https://cdn.paris.fr/paris/2019/10/01/huge-b3661d1d3cb578bc5752cc0d4237d592.jpg',
    titre:'Paris',
    description:'Ville romantique par excellence, elle attire les touristes tout au long de lannée.belle vie connue par ces bal bla bla ',
    },
    {
        photo:'https://www.voyageur-independant.com/wp-content/uploads/venise-italie-1024x652.jpg',
        titre:'Venise',
        description:'LItalie, pays européen bordé par la Méditerranée et lAdriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des trésors artistiques et des ruines antiques.',  
    },
    {
        photo:'https://partir.ouest-france.fr/photos/pays/accueil/670/turquie.jpg',
        titre:'Turquie',
        description:'La Turquie est surtout connue pour ses plages de sables blancs ou de petits galets et son eau turquoise au bord de la mer Égée et la mer Méditerranée.',  
    },
    {
        photo:'https://images.salaun-holidays.com/(Image)-image-Maroc-Marrakech-Pavillon-de-la-Menara-as_260054994.jpg',
        titre:'Maroc',
        description:'Le Maroc offre au visiteur ses paysages dune extraordinaire diversité et son exceptionnel patrimoine culturel. Le voyageur se perd dans les médinas aux somptueux palais chérifiens.',  
    },


])
const handleSearch = (val) => {
    setFilter(val)
  }
  const handleAddTour =(val)=>{
    setTours([...tours,val])
  }
return (
    <div>
<First handleSearch={handleSearch}/>


<CardList style={{display:'flex'}} coordone={tours.filter(elm => elm.titre.toUpperCase().includes(filter.toUpperCase()))}
handleAddTour={handleAddTour}
/>

</div>
)
}

export default OurTours