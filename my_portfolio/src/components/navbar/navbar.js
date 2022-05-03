import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navbar.scss'

const MainNavbar = () => {
    return (
        <Navbar className="bg-transparent fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Nathan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <NavLink className={"nav-link active"} to="/">Home</NavLink>
                        <NavLink className={"nav-link"} to="/about">About</NavLink>
                        <NavLink className={"nav-link"} to="/about">Service</NavLink>
                        <NavLink className={"nav-link"} to="/about">Portfolio</NavLink>
                        <NavLink className={"nav-link"} to="/about">Testimonial</NavLink>
                        <NavLink className={"nav-link"} to="/about">Blog</NavLink>
                    </Nav>

                    <Button variant="dark">Contact</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;