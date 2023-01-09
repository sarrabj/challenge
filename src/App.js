
import  First  from './ComponentsHome/First';
import Slide from './ComponentsHome/Slide';
import NewTours from './ComponentAdd/NewTours'
import './App.css';
import {Routes,Route} from 'react-router-dom'

import React from 'react'

import CardList from './ComponentTours/CardList';
import { useState } from 'react'
function App() {
  
    const [filter,setFilter]=useState('')
    const [tours, setTours] = useState([{
    photo:'https://cdn.paris.fr/paris/2019/10/01/huge-b3661d1d3cb578bc5752cc0d4237d592.jpg',
    titre:'Paris',
    description:'Ville romantique par excellence, elle attire les touristes tout au long de lannée.belle vie connue par ces bal bla bla ',
    },
    {
        photo:'https://www.voyageur-independant.com/wp-content/uploads/venise-italie-1024x652.jpg',
        titre:'Venise',
        description:'LItalie, pays européen bordé par la Méditerranée et lAdriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. ',  
    },
    {
        photo:'https://partir.ouest-france.fr/photos/pays/accueil/670/turquie.jpg',
        titre:'Turquie',
        description:'La Turquie est surtout connue pour ses plages de sables blancs ou de petits galets et son eau turquoise au bord de la mer Égée ',  
    },
    {
        photo:'https://images.salaun-holidays.com/(Image)-image-Maroc-Marrakech-Pavillon-de-la-Menara-as_260054994.jpg',
        titre:'Maroc',
        description:'Le Maroc offre au visiteur ses paysages dune extraordinaire diversité et son exceptionnel patrimoine culturel. ',  
    },


])


  const handleSearch = (val) => {
    setFilter(val)
  }
  const handleAddTour =(val)=>{
    setTours([...tours,val])
  }
  return (
    <div className="App" >
      
      



      <Routes>
      <Route path='/'element={
      <>
        <First handleSearch={handleSearch}/>
        <Slide/>
      </> 
      }/>
      <Route path='/ourtours' element={ <CardList style={{display:'flex'}} coordone={tours.filter(elm => elm.titre.toUpperCase().includes(filter.toUpperCase()))}/>}/>
      <Route path='/addnew' element={<NewTours handleAddTour={handleAddTour}/>}/> 
      </Routes>
  
      
    </div>
  );
}

export default App;
