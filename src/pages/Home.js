import React from 'react';
import CardsContainer from '../components/CardsContainer';
import programmer from '../imgs/programmer3.jpg';
import standingMan from '../imgs/standingMan1.jpg';
import linkedin from '../imgs/icons/linkedin.png';
import github from '../imgs/icons/github.png';
import { Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{backgroundColor: '#FAF9FF'}}>


      {/* HOME DIV */}
      <div id="home" className='paddingClass'>
        <div className="d-flex flex-wrap justify-content-center">


          <div className='bodyText50'>
            <h4 className="pt-1" style={{ fontSize: '20px' }}>
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
            className="marginInSmall"
          />


        </div>
      </div>


      <br />


      {/* SKILLS DIV */}
      <div id="skills" className='paddingClass2' style={{ backgroundColor: '#F2F2FE'}}>
        <div className="d-flex justify-content-center align-items-center">


          <div>
            <Image
              src={standingMan}
              width="400px"
              alt="Standing Man"
              className="p-1 hiddenInSmall"
            />
          </div>


          <div className='bodyText50 paddingClass2'>
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
        </div>
      </div>


      <br />


      {/* PROJECTS DIV */}
      <div id="projects" className='paddingClass2'>
        <div className="d-flex justify-content-center align-items-center" >
          <h1 className="pb-5">Projects</h1>
        </div>
        <CardsContainer />
      </div>


      <br />


      {/* CONTACT DIV */}
      <div id="contact" className='paddingClass2'>
        <div className="text-center">
          <div>
            <h1 className="pb-5">Contact Me</h1>
          </div>
          <a href='https://linkedin.com/in/filbraga/'>
          <img alt="svgImg" src={linkedin} style={{width: '75px'}}/>
          </a>
          <a href='https://github.com/filBraga'>
          <img alt="svgImg" src={github} style={{width: '75px'}}/>
          </a>
        </div>
      </div>


    </div>
  );
};

export default Home;
