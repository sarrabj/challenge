import  { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import First from '../ComponentsHome/First';

function Example({handleAddTour}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate=useNavigate()
  const goBack=()=>{
     if(true)
     navigate(-1)
     else 
     navigate('/')
   }
   const [inputs,setInputs]=useState([
    {photo:'',
    titre:'',
    description:'',
    },
  ])
  const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
  }
  const handleSave=()=>{
    handleAddTour.handleAddTour(inputs)
    setInputs(  {photo:'',
    titre:'',
    description:'',
    },)
    handleClose  () 
  }
  return (
    <>
    
<First/>
<Button onClick={goBack}style={{backgroundColor:'white',color:'red',borderColor:'red'}}  >Retour page Home</Button>
        <div style={{display:'flex', flexDirection:'column',margin:'50px',width:'500px'}}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Photo</Form.Label>
            <Form.Control
                type="email"
                placeholder="Photo"
                autoFocus
                onChange={handleChange}
            />
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Titre</Form.Label>
            <Form.Control
                type="email"
                placeholder="Titre"
                autoFocus
                onChange={handleChange}
            /> </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="email"
                placeholder="Description"
                autoFocus
                onChange={handleChange}
            /> </Form.Group>
            
            
        </Form>
        </Modal.Body>
        <Modal.Footer>
        
        <Button variant="primary" onClick={handleSave}>
           Add New Tour
        </Button>
        </Modal.Footer>
        </div>
    </>
  );
}

export default Example;