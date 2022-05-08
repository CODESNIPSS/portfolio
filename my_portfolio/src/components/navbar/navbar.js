import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navbar.scss'
import React, { useState, useEffect } from "react"

const MainNavbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeNavbarBg = ()=> {
        // console.log(window.scrollY)
        if(window.scrollY >= 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeNavbarBg();

        window.addEventListener("scroll", changeNavbarBg)
    })

    return (
        <Navbar className={ navbar ? "active shadow-sm fixed-top" : "fixed-top" } expand="lg">
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