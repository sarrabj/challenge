import  { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import First from '../ComponentsHome/First';
import {Link} from 'react-router-dom'
function Example(props) {
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
    props.handleAddTour(inputs)
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
                name="photo"
                onChange={handleChange}
                autoFocus
                
            />
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Titre</Form.Label>
            <Form.Control
                type="email"
                placeholder="Titre"
                name="titre"
                onChange={handleChange}
                autoFocus
                
            /> </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="email"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                autoFocus
                
            /> </Form.Group>
            
            
        </Form>
        </Modal.Body>
        <Modal.Footer>
        
        <Button variant="primary" onClick={handleSave} style={{backgroundColor:'white'}}>
           <Link to='/ourtours' style={{textDecoration:'none'}}> Add New Tour</Link>
        </Button>
        </Modal.Footer>
        </div>
    </>
  );
}

export default Example;