import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home'
import Users from './pages/Users'
import About from './pages/About'
// import { render } from '@testing-library/react';

import Container from 'react-bootstrap/Container';


const App = () => {
  React.useEffect(() => {
    // Runs after the first render() lifecycle
  }, []);

  return (
    <MemoryRouter>
      <NavbarComponent />
      <div>

              <Routes>
                <Route path="/users" element={<Users/>} />
                <Route path="/about" element={<About/>} />
                <Route exact path="/" element={<Home/>} />
              </Routes>
      </div>
    </MemoryRouter>
  )};

export default App;
