import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from 'reactstrap';

import "./footer.css";

export const Footer = props => {
  return (
    <div className="footer-container">
      <Container>
        <footer>
          <div className="footer-signature">Bookshop App by Paweł Butra 2019</div>
          <div className="links-container">
            <NavLink exact to="/" activeClassName="active">
              Strona główna
            </NavLink>
            <NavLink exact to="/cart" activeClassName="active">
              Koszyk
            </NavLink>
          </div>
        </footer>
      </Container>
    </div>
  );
};
