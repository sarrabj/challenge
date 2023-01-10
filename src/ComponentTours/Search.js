import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Search = ({handleSearch}) => {
  return (
    <div style={{width:'450px',margin:'20px'}}>
 <Form className="d-flex">
            <Form.Control
            onChange={(e)=>handleSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>


    </div>
  )
}

export default Search