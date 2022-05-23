import '../App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import { SingleCard } from './SingleCard';

import lessonsLearned from '../imgs/cards/LessonsLearned.png'
import playgroundFunctions from '../imgs/cards/playgroundFunctions.png'
import PixelsArt from '../imgs/cards/PixelsArt.png'
import toDoList from '../imgs/cards/toDoList.png'
import basicForms from '../imgs/cards/basicForms.png'
import javaScriptsUnitTests from '../imgs/cards/javaScriptsUnitTests.png'
import es6HigherOrderFunctions from '../imgs/cards/es6HigherOrderFunctions.png'
import shoppingCartAPI from '../imgs/cards/shoppingCartAPI.png'
import reactSolarSystem from '../imgs/cards/reactSolarSystem.png'
import reactSuperTrunfo from '../imgs/cards/reactSuperTrunfo.png'
import reactTunes from '../imgs/cards/reactTunes.png'
import frontendOnlineStore from '../imgs/cards/frontendOnlineStore.png'
import reactTests from '../imgs/cards/reactTests.png'

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
        cardImage={ reactTests }
        cardTitle='React Tests'
        cardText='Use React-Testing-Library queries in automated tests and Create API mocks using fetch.'
        cardLink='https://github.com/filBraga/reactTests'
      />

      <SingleCard
        cardImage={ frontendOnlineStore }
        cardTitle='Frontend Online Store'
        cardText='Online Store from the Mercado Livre API;
        Add and remove items from a shopping cart simulates purchase'
        cardLink='https://github.com/filBraga/frontendOnlineStore'
      />

      <SingleCard
        cardImage={ reactTunes }
        cardTitle='React Tunes'
        cardText='App capable of playing songs from an API, creating a list of favorite songs and editing the profile of the user logged in, using setState and BrowserRouter.'
        cardLink='https://github.com/filBraga/reactTunes'
      />

      <SingleCard
        cardImage={ reactSuperTrunfo }
        cardTitle='React Super Trunfo'
        cardText='React application with state manipulation in classes. 
        Pass information from child components to parent components via callbacks'
        cardLink='https://github.com/filBraga/reactSuperTrunfo'
      />

      <SingleCard
        cardImage={ reactSolarSystem }
        cardTitle='React Solar System'
        cardText="Components class in React and multiple components from an array using props to pass information. Usage of PropTypes to validate a component' props"
        cardLink='https://github.com/filBraga/reactSolarSystem'
      />

      <SingleCard
        cardImage={ shoppingCartAPI }
        cardTitle='Shopping Cart API Mercado Livre/ Libre'
        cardText='API requests to (Application Programming Interface) Mercado Livre API;
        Work with asynchronous functions;
        Implement unit tests.'
        cardLink='https://github.com/filBraga/shoppingCartAPI'
      />

      <SingleCard
        cardImage={ es6HigherOrderFunctions }
        cardTitle='High Order Functions'
        cardText='Using of HOFs to manipulate and create arrays;'
        cardLink='https://github.com/filBraga/es6HigherOrderFunctions'
      />

      <SingleCard
        cardImage={ javaScriptsUnitTests }
        cardTitle='JavaScript Unit Tests'
        cardText='JEST Unit tests for functions, a powerful JavaScript Testing Framework.'
        cardLink='https://github.com/filBraga/javaScriptUnitTests'
      />

      <SingleCard
        cardImage={ basicForms }
        cardTitle='Basic Forms'
        cardText='HTML form with CSS Flex-box to create flexible layouts'
        cardLink='https://github.com/filBraga/basicForms'
      />

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
        cardTitle='JavaScript Functions'
        cardText=' Write JavaScript code that uses variables;
        Create code that uses if/else, for/in;
        Manipulate arrays and objects;
        Use functions to organize and structure your code;'
        cardLink='https://github.com/filBraga/playgroundFunctions'
      />

      <SingleCard
        cardImage={ lessonsLearned }
        cardTitle='HTML and CSS'
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
