import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header() {

  const Navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user-info"))
  // console.warn(user);

  const logout = () => {

    localStorage.clear();
    alert("User Logged Out");
    Navigate('/userLogin');

  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React E-comm</Navbar.Brand>
          <Nav className="me-auto">

            {
              localStorage.getItem('user-info') ?
                <>
                  <Nav.Link ><Link to="/addProduct">Add Product</Link></Nav.Link>
                  <Nav.Link ><Link to="/">List Product</Link></Nav.Link>
                </>
                :
                <>
                  <Nav.Link ><Link to="/userReg">Register</Link></Nav.Link>
                  <Nav.Link ><Link to="/userLogin">Login</Link></Nav.Link>
                </>

            }


          </Nav>

          {
            localStorage.getItem('user-info') ?
              <>
                <Nav>
                  <NavDropdown title={user[0].username} id="navbarScrollingDropdown">
                    <NavDropdown.Item >Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
              :
              null
          }
        </Container>
      </Navbar>
    </>
  );
}

export default Header;