import React from 'react'
import Card from './Card'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import First from '../ComponentsHome/First'

const CardList = ({coordone}) => {
  const navigate=useNavigate()
 const goBack=()=>{
    if(true)
    navigate(-1)
    else 
    navigate('/')
  }
  
  return (

    <div style={{backgroundColor:'beige'}}>
     
      <Button onClick={goBack}style={{backgroundColor:'white',color:'red',borderColor:'red'}} > Retour Page Home</Button>

        <div  style={{display:'flex',justifyContent:'space-evenly',margin:'20px'}}> 
        {coordone.length?coordone.map(el=><Card el={el}/>):<h2 style={{color:'red'}}>Not Found</h2>}</div> 
          
      </div>
    
  )
}

export default CardList