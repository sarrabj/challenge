import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'


function KitchenSinkExample({el}) {
 
 
  return (
  <header  >
    <div style={{boxShadow:'2px -6px 7px pink',borderRadius:'5px'}} >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.photo}  />
      <Card.Body>
        <Card.Title>{el.titre}</Card.Title>
        <Card.Text>
         {el.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        
        
      </ListGroup>
      <Card.Body>
      <Button style={{backgroundColor:'white',color:'black'}} variant="primary">Delete</Button>
      <br></br>
        <Card.Link href="#">More Datails</Card.Link>
      </Card.Body>
      </Card>
      </div>
    
    </header>
  );
}

export default KitchenSinkExample;