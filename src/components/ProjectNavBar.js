import '../App.css';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

const ProjectNavBar = () => {
  return(
    <ButtonToolbar className="custom-btn-toolbar">
      <LinkContainer to="/">
        <Button>Home</Button>
      </LinkContainer>
      <LinkContainer to="/project1">
        <Button>Project 1</Button>
      </LinkContainer>
      <LinkContainer to="/project2">
        <Button>Project 2</Button>
      </LinkContainer>
    </ButtonToolbar>
  
  )
}
export default ProjectNavBar
