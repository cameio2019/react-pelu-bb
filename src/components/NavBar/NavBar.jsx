import CartWidget from './CartWidget';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../NavBar/spinner2.gif'; 
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BiHomeSmile} from 'react-icons/bi';

const NavBar =() => {

return (
<>
<Navbar collapseOnSelect expand="lg">
    <Container>
            <Link to="/">
                <Navbar.Brand>
                    <img src={logo} className="logo" alt= "logo" />
                </Navbar.Brand>
            </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style= {{backgroundColor: "white"}} />
        <Navbar.Collapse id="responsive-navbar-nav" class="d-flex justify-content-center ms-5"  style= {{backgroundColor: "#161616", zIndex: "20",borderRadius: "10px"}} >
        
        <Nav className="me-auto">
                <Link to="/" className="nav-link"> <BiHomeSmile style={{ width: '5rem', height:'40px'}}/></Link>

            <NavDropdown title="Categorías" id="collasible-nav-dropdown">

                <NavDropdown.Item>
                    <HashLink to="/#catIcons" className="categorias">
                        Todos
                    </HashLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <HashLink to="/categoria/shampoo/#catIcons" className="categorias">
                        Shampoo
                    </HashLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <HashLink to="/categoria/vitaminas/#catIcons" className="categorias">
                        Vitamina
                    </HashLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <HashLink to="/categoria/mascaras/#catIcons" className="categorias">
                        Máscaras
                    </HashLink>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
            <Nav>
                <Nav.Link href="cart">
                    <Link to="/cart">
                    <CartWidget />
                    </Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

</>

)}

export default NavBar;