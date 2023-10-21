import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoHiit from "../../img/logo-hiit.png"
import CartWidget from '../cartWidget/cartWidget';
import styles from "./styles.module.css"
import { NavLink } from 'react-router-dom';



function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navBar}>
            <Container>
                <NavLink to="/"><Navbar.Brand className={styles.navBarHiit}>
                    <img src={LogoHiit}
                        alt="Logo"
                        width="120"
                        height="50"
                    />
                </Navbar.Brand></NavLink>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className={styles.navHome}>Home</Nav.Link>
                        <NavDropdown title="Productos" id="collapsible-nav-dropdown" className={styles.navProductos}>
                            <NavDropdown.Item as={NavLink} to="products/bandas-elasticas">
                                Bandas Elásticas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/products/colchonetas">
                                Colchonetas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/products/mancuernas">
                                Mancuernas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/products/tobilleras">
                                Tobilleras
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/products/sogas">
                                Sogas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/products/guantes">
                                Guantes
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes" className={styles.navCarrito}>
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;