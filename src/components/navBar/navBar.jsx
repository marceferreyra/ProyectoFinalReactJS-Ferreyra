import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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

                        <Nav.Link as={NavLink} to="/category/bandas-elasticas" className={styles.navProducts} >
                            Bandas Elásticas
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/category/colchonetas" className={styles.navProducts} >
                            Colchonetas
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/category/mancuernas" className={styles.navProducts} >
                            Mancuernas
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/category/tobilleras" className={styles.navProducts} >
                            Tobilleras
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/category/sogas" className={styles.navProducts} >
                            Sogas
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/category/guantes" className={styles.navProducts} >
                            Guantes
                        </Nav.Link>

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