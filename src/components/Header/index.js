import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

function sumItems(cartState) {
  return cartState.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0)
}

export const Header = props => {
  const itemsInCart = props.cart;
  console.log("TUTAJ" + JSON.stringify(itemsInCart));
  console.log("liczba:" + sumItems(itemsInCart));
  return (
    <div className="header-container">
      <nav>
        <div className="main-title">Super Ksiązka</div>
        <div className="links-container">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/user" activeClassName="active">
            User
          </NavLink>
          <NavLink exact to="/cart" activeClassName="active">
            Cart({sumItems(itemsInCart) || 0})
          </NavLink>
        </div>
      </nav>
    </div>
  );
};


