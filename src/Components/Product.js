import React from "react";
import propTypes from 'prop-types';
import Text from './Text';

export default function Product(props) {
  const { item, toggleView, addToCart } = props;
  if (toggleView)
    return (
      <tr className="products_container clearfix">
        <td>
          <img className="product_img" src={item.imageUrl} alt="product"/>
        </td>
        <td>
          <Text text={item.name} isHeader={true}/>
          <Text text={item.description} isHeader={false}/>
          <Text text={item.price} isHeader={false}/>
        </td>
        <td>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </td>
      </tr>
    );
  else
    return (
      <tr className="product_container clearfix">
        <td>
          <Text text={item.name} isHeader={true}/>
        </td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </td>
      </tr>
    );
}

Product.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
    quantity: propTypes.number.isRequired,
    imageUrl: propTypes.string.isRequired
  }),
  addToCart: propTypes.func.isRequired,
  toggleView: propTypes.bool
};
