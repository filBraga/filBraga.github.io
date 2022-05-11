import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export const SingleCard = ({ cardImage, cardTitle, cardText, cardLink }) => {  
    return (
      <Card style={{ width: '18rem' }} className='m-3 '>
        <Card.Img variant="top" src={ cardImage } />
        <Card.Body>
          <Card.Title>{ cardTitle }</Card.Title>
          <Card.Text>
            { cardText }
          </Card.Text>
          <Nav.Item>
            <Nav.Link href={ cardLink }>
              <Button variant="primary">Go to GitHub</Button>
            </Nav.Link>
          </Nav.Item>
        </Card.Body>
      </Card>
    )

}
