import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../App.css";
import Text from "./Text";

function Product (props) {
    const { item, cardView, addItem } = this.props;
    if (props.cardView)
                return (
                  <tr className="products_container clearfix">
                    <td>
                      <img className="product_img" src={item.imageUrl} />
                    </td>
                    <td>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p>{item.price}</p></td><td>
                      <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                    </td>
                  </tr>
                );
              else
                return (
                  <tr className="product_container clearfix">
                    <td>
                      <h4>{item.name}</h4>
                    </td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td><button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button></td>
                  </tr>
                );
}



// Step 2, proptypes
// Product.propTypes = {
//   item: PropTypes.object.isRequired,
//   addItem: PropTypes.func.isRequired,
//   cardView: PropTypes.bool
// };
// export default Product;
