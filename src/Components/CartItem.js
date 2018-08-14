import React from 'react';

function CartItem(props) {
    const { item } = props;
    return (
        <div>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => props.removeItem(item.id)}>Remove from Cart</button>
        </div>
    );

}
export default CartItem;