import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Container from 'react-bootstrap/Container';

import Footer from './components/Footer';
import Homepage from './components/pages/Homepage';
import Aboutpage from './components/pages/Aboutpage';
import Contactpage from './components/pages/Contactpage';


class  App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Desmaretz stéphane",
      headerLinks: [
        {title: "Accueil", path: "/"},
        {title: "A propos", path: "/about"},
        {title: "Contact", path: "/contact"},
      ],
      Accueil: {
        title: "Mon portfolio",
        subTitle: "Découvrez tous mes travaux.",
        text: "Consultez mes projets ci-dessous.",
      },
      About: {
        title: "Mon cv",
      },
      Contact: {
        title: "Contactez-moi",
      }

    }
  }
  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom sticky-top" bg="transparent" expand="lg">
            <NavbarBrand>Stéphane Desmaretz</NavbarBrand>
            <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/about">Mon CV</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
                <Route path="/" exact render={() => <Homepage title={this.state.Accueil.title} subTitle={this.state.Accueil.subTitle} text={this.state.Accueil.text}/> } />
                <Route path="/about" render={() => <Aboutpage title={this.state.About.title} /> } /> 
                <Route path="/contact" render={() => <Contactpage title={this.state.Contact.title} /> } />
          <Footer />

        </Container>

      </Router>
    );

  }
}

export default App;
