
import  First  from './ComponentsHome/First';
import Slide from './ComponentsHome/Slide';
import NewTours from './ComponentAdd/NewTours'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import OurTours from './ComponentTours/OurTours';
function App() {
 
  return (
    <div className="App" >
      <Routes>
      <Route path='/'element={
      <>
        <First/>
        <Slide/>
      </> 
      }/>
      <Route path='/ourtours' element={<OurTours/>}/>
      <Route path='/addnew' element={<NewTours />}/> 
      </Routes>
      
      
    </div>
  );
}

export default App;
