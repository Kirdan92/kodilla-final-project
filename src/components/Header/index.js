import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function sumItems(cartState) {
  return cartState.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0)
}

export default class  Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
    const itemsInCart = this.props.cart;
    return (
      
      <div className="header-wrapper">
      <div className="header-container">
        <Container className="nav-container">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Super Książka</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/"  className="nav-link" activeClassName="active">Strona główna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/cart" className="nav-link" activeClassName="active"><FontAwesomeIcon icon="shopping-cart" /> Koszyk({sumItems(itemsInCart) || 0})</NavLink>
              </NavItem>
            </Nav>
            </Collapse>

          </Navbar>

        </Container>
      </div>
      </div>
                
    
    );
  };
}


