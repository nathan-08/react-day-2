import React from "react";

export default function CartItem(props) {
  const { item, deleteFromCart } = props;
  return (
    <tr className="products_container clearfix">
      <td>
        <img className="product_img" src={item.imageUrl} />
      </td>
      <td>
        <h4>{item.name}</h4>
        <span>{(item.price * item.quantity).toFixed(2)}</span> <span> | qty: </span>
        <span>{item.quantity}</span>
        <br />
        <button onClick={_ => deleteFromCart(item.id)}>remove item</button>
      </td>
      <td />
    </tr>
  );
}
