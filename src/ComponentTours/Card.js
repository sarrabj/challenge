import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

function KitchenSinkExample({elm}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elm.photo}  />
      <Card.Body>
        <Card.Title>{elm.titre}</Card.Title>
        <Card.Text>
         {elm.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        
        
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Delete</Button>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;