import React from "react";
import { connect } from "react-redux";

export const cartItemsQuantity = (cartItems) => {
  return cartItems.reduce((sum, item) => {
    const filteredItem = sum.filter(item2 => item2.id === item.id)[0]
    filteredItem !== undefined ? filteredItem.quantity++ : sum.push({...item, quantity: 1,})
    return sum;
  }, [])
}

export default class Cart extends React.Component {
  render() {
    return <div>Bookshop</div>;
  }
}

