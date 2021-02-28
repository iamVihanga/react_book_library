import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaBookOpen, FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navBarHeader">
      <Container className="navBarContainer">
        <div className="head py-3">
          <Navbar className="head__customeNav" expand="lg" bg="light">
            <Navbar.Brand href="#home" className="siteTitle">
              <FaBookOpen />
              &nbsp;BookNow
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <FaBars className="menuIcon" />
            </Navbar.Toggle>
            <Navbar.Collapse
              className="customNav-collapse justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav>
                <Nav.Link href="#home" className="navLink">
                  Home
                </Nav.Link>

                <Nav.Link href="#explore" className="navLink">
                  Explore Books
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
