import React from "react";
import { connect } from "react-redux";

function sort (items) {
  return items.sort((a, b) => a.id - b.id)
};

const Cart = (props) => {
  return(
    <table>
      <thead>
      <tr>
        <th>Przedmiot</th>
        <th>Ilość</th>
      </tr>
      </thead>
      <tbody>
        {
          sort(props.cart).map(cartItem => <tr key={cartItem.id}>
            <td>{ cartItem.title }</td>
            <td>{ cartItem.quantity }</td>
            <td>{ cartItem.price }</td>
            <td>
              <button onClick={() => props.addToCart(cartItem)}>+</button>
            </td>
            <td>
              <button onClick={() => props.removeFromCart(cartItem)}>-</button>
            </td>
            <td>
              <button onClick={() => props.removeAllFromCart(cartItem)}>Usuń wszsytkie</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
  );
}


const mapStateToProps = function(store) {
	return {
		cart: store.cart,
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		addToCart: (item) => {
      dispatch({ type: "ADD_ITEM", payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: "REMOVE_ITEM", payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({ type: "REMOVE_ALL", payload: item})
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);