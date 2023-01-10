
import  First  from './ComponentsHome/First';
import Slide from './ComponentsHome/Slide';
import NewTours from './ComponentAdd/NewTours'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import React from 'react'
import CardList from './ComponentTours/CardList';
import { useState } from 'react'
import Details from './ComponentTours/Details'
import Search from './ComponentTours/Search';
function App() {
  
    const [filter,setFilter]=useState('')
  console.log(filter)
    const [tours, setTours] = useState([{
      id:'1',
    photo:'https://cdn.paris.fr/paris/2019/10/01/huge-b3661d1d3cb578bc5752cc0d4237d592.jpg',
    titre:'Paris',
    description:'Ville romantique par excellence, elle attire les touristes tout au long de lannée.belle vie connue par ces bal bla bla ',
    details:'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    
  },
    {id:'2',
        photo:'https://www.voyageur-independant.com/wp-content/uploads/venise-italie-1024x652.jpg',
        titre:'Venise',
        description:'LItalie, pays européen bordé par la Méditerranée et lAdriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. ',  
    details:'https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=353&q=80',
      },
    {id:'3',
        photo:'https://partir.ouest-france.fr/photos/pays/accueil/670/turquie.jpg',
        titre:'Turquie',
        description:'La Turquie est surtout connue pour ses plages de sables blancs ou de petits galets et son eau turquoise au bord de la mer Égée ',  
    details:'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80'
      },
    {id:'4',
        photo:'https://images.salaun-holidays.com/(Image)-image-Maroc-Marrakech-Pavillon-de-la-Menara-as_260054994.jpg',
        titre:'Maroc',
        description:'Le Maroc offre au visiteur ses paysages dune extraordinaire diversité et son exceptionnel patrimoine culturel. ',  
        details:'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
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
      
      <First />

      <Routes>
      <Route path='/'element={
      <>
        <Slide/>
      </> 
      }/>
 
      <Route path='/ourtours' element={ 
      <>
            <Search handleSearch={handleSearch} />

        
      <CardList style={{display:'flex'}} coordone={tours.filter(elm => elm.titre.toUpperCase().includes(filter.toUpperCase()))}/>
      </>
      
      }/>
      <Route path='/addnew' element={<NewTours handleAddTour={handleAddTour}/>}/> 
      <Route path='/details/:prodId' element={<Details prodTour={tours}/>}/>
      </Routes>
  
      
    </div>
  );
}

export default App;
