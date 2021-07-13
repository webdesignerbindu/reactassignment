import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
export default class NavbarComp extends Component{
   render(){
       return(
           <Router>
        <div>
        <Navbar  bg="danger" variant={"dark"} expand="lg">
  <container>
    <Navbar.Brand className="pagename" href="#home">Bindu's Webpage</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="hme" as={Link} to ={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to ={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to ={"/contact"}>contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </container>
</Navbar>
        </div>
        <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </div>
        </Router>
       );

   }

}