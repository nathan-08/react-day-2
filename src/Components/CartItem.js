import React from "react";
import propTypes from 'prop-types';
import Text from './Text';

export default function CartItem(props) {
  const { item, deleteFromCart } = props;
  return (
    <tr className="products_container clearfix">
      <td>
        <img className="product_img" src={item.imageUrl} alt="product"/>
      </td>
      <td>
        <Text text={item.name} isHeader={true}/>
        <span>{(item.price * item.quantity).toFixed(2)}</span> <span> | qty: </span>
        <span>{item.quantity}</span>
        <br />
        <button onClick={_ => deleteFromCart(item.id)}>remove item</button>
      </td>
      <td />
    </tr>
  );
}

CartItem.propTypes = {
    item: propTypes.shape({
        name: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        id: propTypes.number.isRequired,
        description: propTypes.string.isRequired,
        quantity: propTypes.number.isRequired,
        imageUrl: propTypes.string.isRequired
    }),
    deleteFromCart: propTypes.func.isRequired
}