import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Product extends Component {
    
    render() {
        const { item } = this.props;
        return (
            <div>
                <img src={item.imageUrl} alt='the item'/>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.props.addItem(item)}>Add to Cart</button>
            </div>
        );
    }
}
Product.propTypes = {
    item:PropTypes.object.isRequired,
    addItem:PropTypes.func.isRequired
}
export default Product;