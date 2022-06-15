import React from 'react';
import CardsContainer from '../components/CardsContainer';
import programmer from '../imgs/programmer3.jpg';
import standingMan from '../imgs/standingMan1.jpg';
import { Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{backgroundColor: '#FAF9FF'}}>
      <div id="home" className='paddingClass'>
        <div className="d-flex flex-wrap justify-content-center">
          <div style={{ width: '50%', minWidth: '350px', maxWidth: '550px' }}>
            <h4 className="pt-1 font-weight-light" style={{ fontSize: '20px' }}>
              Filipe Braga
            </h4>
            <h1 className="mb-5" style={{ fontSize: '50px' }}>
              Front-end Developer, soon Fullstack...
            </h1>
            <h4>
              Software Developer Front-end and graduate Engineer. Passionate
              about coding, engineering and problem solving in general. I live
              in Minas Gerais - Brazil.
            </h4>
          </div>

          <Image
            src={programmer}
            height="322"
            width="450px"
            
            alt="Programmer"
            className="p-1 marginInSmall"
          />
        </div>
      </div>
      <br className="mx-auto my-5 " />
      <div
        className="d-flex flex-wrap justify-content-center"
        id="skills"
        style={{ backgroundColor: '#F2F2FE', padding: '50px 0px 50px 0px'}}
      >
        <div>
          <Image
            src={standingMan}
            width="400px"
            alt="Standing Man"
            className="p-1 hiddenInSmall"
          />
        </div>
        <div style={{ width: '40%', minWidth: '350px', maxWidth: '550px' }}>
          <h1>Skills</h1>

          <h3 className="pt-3">Fullstack Student at TRYBE®</h3>
          <h5 className="pt-3">Fundamentals</h5>
          <h6>
            Unix and Bash; Git, GitHub and Internet; HTML and CSS; JavaScript;
            DOM Events and Web Storage; Forms, Flex-box and Responsive Web
            Design; Unit Tests; High Order Functions; Application Programming
            Interface ( API ); Async, Await and Fetch;
          </h6>
          <h5 className="pt-3">Front-end</h5>
          <h6>
            React; Components; State and Lifecycle; Agile methodology; React
            Router; React Testing Library; Redux; Context API; React Hooks;
          </h6>
          <h5 className="pt-3">Back-end</h5>
          <h6>Docker; SQL; Node.js; Rest and Restful; ORM and Authentication; Deployment;</h6>
        </div>
        <div>
        </div>
      </div>



      <br className="mx-auto my-5 " />
      <div id="projects">
        <div className="my-3" style={{ textAlign: 'center', padding:'50px 0px 50px 0px' }}>
          <div>
            <h1>Projects</h1>
          </div>
        </div>
        <div>
          <CardsContainer />
        </div>
      </div>



      <br className="mx-auto my-5 " />
      <div id="contact">
        <div className="my-3" style={{ textAlign: 'center', padding:'50px 0px 50px 0px' }}>
          <div>
            <h1>Contact Me</h1>
            <br />
            <br />
          </div>
          <a href='https://linkedin.com/in/filbraga/'>
            linkedin.com/in/filbraga/
          </a>
          <br />
          <a href='https://github.com/filBraga'>
            https://github.com/filBraga
          </a>
        </div>
        <div style={{ display:'flex', 
          justifyContent:'center', alignItems: 'center' }}>
        </div>
      </div>



    </div>
  );
};

export default Home;
