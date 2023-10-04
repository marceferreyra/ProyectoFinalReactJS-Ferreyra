import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoHiit from "../../img/logo-hiit.png"
import CartWidget from '../cartWidget/cartWidget';
import styles from "./styles.module.css"


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navBar}>
            <Container>
                <Navbar.Brand href="#home" className={styles.navBarHiit}>
                    <img src={LogoHiit}
                        alt="Logo"
                        width="120"
                        height="50"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={styles.navHome}>Home</Nav.Link>
                        <Nav.Link href="#accesorios" className={styles.navAccesorios}>Accesorios</Nav.Link>
                        <Nav.Link href="#suplementos" className={styles.navSuplementos}>Suplementos</Nav.Link>
                        <NavDropdown title="Indumentaria" id="collapsible-nav-dropdown" className={styles.navIndumentaria}>
                            <NavDropdown.Item href="#action/3.1">Femenina</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Masculina
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