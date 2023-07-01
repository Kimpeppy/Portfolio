import Container from 'react-bootstrap/Container';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import About from '../pages/About';
import Home from '../pages/Home';
import Skills from '../pages/Skills'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function BasicExample() {
  return (
    <Router>
      <div>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <AccountCircleIcon className='navbarIcon' style={{ marginRight: '10px' }}/>
            <Navbar.Brand href="#home">Michael Kim's Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as = {Link} to = {"/home"}>Home</Nav.Link>
                <Nav.Link as = {Link} to = {"/about"}>About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item as = {Link} to = {"/skills"}>Skills</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/home" element={<Home/>}/>
          <Route path = "/skills" element={<Skills/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default BasicExample;
