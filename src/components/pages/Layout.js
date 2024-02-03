import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const Layout = () => {
    return (
        <>
            <div>
                <Navbar style={{
                    backgroundColor: "#A3C1D4"
                }}>
                    <img
                        src='#'
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                    <Navbar.Brand href="#home" style={{ color: "white", marginLeft: "10px" }}>Vani Blogs</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to='/home' style={{ color: "white" }}> Blogs </Nav.Link>
                            <Nav.Link as={Link} to='/login' style={{ color: "white" }}> Login </Nav.Link>
                            <Nav.Link as={Link} to='/register-user' style={{ color: "white" }}> Register User </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="ml-auto" />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <Outlet />
        </>
    )
}

export default Layout



