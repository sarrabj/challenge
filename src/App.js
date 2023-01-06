
import  First  from './ComponentsHome/First';
import Slide from './ComponentsHome/Slide'
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
      </Routes>
      
      
    </div>
  );
}

export default App;
