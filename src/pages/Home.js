import React from 'react';
import CardsContainer from '../components/CardsContainer'
import programmer from '../imgs/programmer2.jpg'
import standingMan from '../imgs/standingMan.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';


const Home = () => {
  return (
    <div style={{paddingTop:'100px'}}>
      <Container>
        <Row id='home'>
          <Col>
            <div>
              <h4 className='pt-5 font-weight-light' style={{fontSize:"20px"}}>Filipe Braga</h4>
              <h1  className='mb-5' style={{fontSize:"50px"}}>
                Front-end Developer, Fullstack soon...
              </h1>
              <h4> 
                Software Developer Front-end and graduate Engineer. 
                Passionate about coding, engineering and problem solving in general. 
                I live in Minas Gerais - Brazil.
            </h4>
            </div>
          </Col>
          <Col>
            <Image src={programmer} width='100%' alt='Programmer' className='p-1 rounded' />
          </Col>
        </Row >
        <br className='mx-auto my-5 '/>
        <Row id='skills' style={{backgroundColor:"#F2F2FE", padding:'100px'}}>
          <Col>
            <Image src={standingMan}   width='100%' alt='Programmer' className='p-1 rounded' />
          </Col>
            <Col>
            <h1>Skills</h1>

            <h3 className='pt-3'>Fullstack Student at TRYBE®</h3>
            <h5 className='pt-3'>Fundamentals</h5>
            <h6> 
              Unix and Bash;
              Git, GitHub and Internet;
              HTML and CSS;
              JavaScript;
              DOM Events and Web Storage;
              Forms, Flex-box and Responsive Web Design;
              Unit Tests;
              High Order Functions;
              Application Programming Interface ( API );
              Async, Await and Fetch;
            </h6>
            <h5 className='pt-3'>Front-end</h5>
            <h6>
              React;
              Components;
              State and Lifecycle;
              Agile methodology;
              React Router;
              React Testing Library;
              Redux;
              Context API;
              React Hooks;
            </h6>
            <h5 className='pt-3'>Back-end</h5>
            <h6>
              Docker;
              SQL;
              Node.js;
            </h6>

            
          </Col>
        </Row>
        <br className='mx-auto my-5 '/>
        <Row id='projects'>
          <div className="my-3" style={{textAlign: 'center'}}>
          <Col>
          <h1>Projects</h1>
          </Col>
          </div>
          <CardsContainer />
        </Row>
      </Container>



    </div>
  )
}

export default Home
