import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
const Details = ({prodTour}) => {
    const params=useParams()
    const descr= prodTour.find(el=>el.id == +params.prodId )
    const navigate=useNavigate()
 const goBack=()=>{
    if(true)
    navigate(-1)
    else 
    navigate('/')
  }

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <div>
    <Button onClick={goBack}style={{backgroundColor:'white',color:'red',borderColor:'red'}}>Retour Page Home</Button>
    </div>
     <div>
        <img src={descr.details} style={{margin:'10px'}}/>
        </div>
    
    </div>
  )
}

export default Details