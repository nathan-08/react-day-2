import React from 'react';
import Text from './Text';

function CartItem(props) {
    const { item } = props;
    return (
        <div>
            <Text isHeader={true} text={item.name}/>
            <Text isHeader={false} text={item.price}/>
        </div>
    );

}
export default CartItem;