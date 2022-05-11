import '../App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import { SingleCard } from './SingleCard';

import lessonsLearned from '../imgs/cards/LessonsLearned.png'
import playgroundFunctions from '../imgs/cards/playgroundFunctions.png'
import PixelsArt from '../imgs/cards/PixelsArt.png'
import toDoList from '../imgs/cards/toDoList.png'

const CardsContainers = () => {
  return(

    <div className="d-flex flex-wrap justify-content-center">

      {/* <SingleCard
        cardImage={ IMAGEEEEEE }
        cardTitle='AAAAAA'
        cardText='BBBBB CCCCC DDDDD EEEEE FFFF'
        cardLink='https://github.com/filBraga/AAAAAAAAAAAAA'
      /> */}

      <SingleCard
        cardImage={ toDoList }
        cardTitle='To Do List'
        cardText='A TO DO LIST using HTML, CSS and JavaScript. Single/ Double-Click'
        cardLink='https://github.com/filBraga/toDoList'
      />

      <SingleCard
        cardImage={ PixelsArt }
        cardTitle='Pixels Art'
        cardText='Web page that contains a functional color palette that can be used to 
        create pixel drawings. Used Javascript, css and html + DOM Manipulation.'
        cardLink='https://github.com/filBraga/pixelsArt'
      />

      <SingleCard
        cardImage={ playgroundFunctions }
        cardTitle='Playground Functions'
        cardText=' Write JavaScript code that uses variables;
        Create code that uses if/else, for/in;
        Manipulate arrays and objects;
        Use functions to organize and structure your code;'
        cardLink='https://github.com/filBraga/playgroundFunctions'
      />

      <SingleCard
        cardImage={ lessonsLearned }
        cardTitle='Lessons Learned'
        cardText='HTML to build web pages;
        Semantics to make your page more accessible and better ranked;
        CSS to add style and position elements;'
        cardLink='https://github.com/filBraga/lessonsLearned'
      />

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
