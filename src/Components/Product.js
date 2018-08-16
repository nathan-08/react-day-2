import React, { Component } from "react";
import "./../App.css";

class Product extends Component {
  render() {
    const { item, cardView } = this.props;
    return cardView ? (
      <div>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <button onClick={() => this.props.addItem(item)}>Add to Cart</button>
      </div>
    ) : (
      <div>
        <img src={item.imageUrl} alt="the item" />
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => this.props.addItem(item)}>Add to Cart</button>
      </div>
    );
  }
}
export default Product;
