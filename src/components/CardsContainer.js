import '../App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import lessonsLearned from '../imgs/cards/LessonsLearned.png'
import playgroundFunctions from '../imgs/cards/playgroundFunctions.png'

const CardsContainers = () => {
  return(

    <div className="d-flex flex-wrap justify-content-center">

      <Card style={{ width: '18rem' }} className='m-3 '>
        <Card.Img variant="top" src={playgroundFunctions} />
        <Card.Body>
          <Card.Title>Playground Functions</Card.Title>
          <Card.Text>
            Write JavaScript code that uses variables;
            Create code that uses if/else, for/in;
            Manipulate arrays and objects;
            Use functions to organize and structure your code;
          </Card.Text>
          <Nav.Item>
            <Nav.Link href="https://github.com/filipebfbraga/lessonsLearned">
              <Button variant="primary">Go somewhere</Button>
            </Nav.Link>
          </Nav.Item>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className='m-3 '>
        <Card.Img variant="top" src={lessonsLearned} />
        <Card.Body>
          <Card.Title>Lessons Learned</Card.Title>
          <Card.Text>
            HTML to build web pages;
            Semantics to make your page more accessible and better ranked;
            CSS to add style and position elements;
          </Card.Text>
          <Nav.Item>
            <Nav.Link href="https://github.com/filipebfbraga/lessonsLearned">
              <Button variant="primary">Go somewhere</Button>
            </Nav.Link>
          </Nav.Item>
        </Card.Body>
      </Card>
    </div>

    // <ButtonToolbar className="custom-btn-toolbar">
    //   <LinkContainer to="/">
    //     <Button>Home</Button>
    //   </LinkContainer>
    //   <LinkContainer to="/project1">
    //     <Button>Project 1</Button>
    //   </LinkContainer>
    //   <LinkContainer to="/project2">
    //     <Button>Project 2</Button>
    //   </LinkContainer>
    // </ButtonToolbar>

    
  )
}
export default CardsContainers
