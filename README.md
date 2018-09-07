<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project we will create a e-commerce React application from an start to finish. We will be provided with the basic file structure from create-react-app, but the App.js file is empty. We will be working on this app over the course of three days. Each day's project is divided into four Parts, with the first part being comparable to that day's mini-project and the following parts adding more features or implementing new patterns. You should expect to be able to complete the first two parts on each day, while parts three and four will offer a challenge for 

<hr>

# Day 2

On this day we will be refactoring some of our code to take advantage of some of the tools that React has to offer. You should have made it to at least part 2 of Day 1, in order to proceed with this project. We will be using reusable functional components to follow the DRY principle, which is, <em>don't repeat yourself</em>. We will pass props into our reusable components. At the end of this project, you should have a better understanding of the following concepts:

* Props
* PropTypes
* Functional Components
* Reusable Components

# Live Example

<a href="#">Click Me!</a>

<img src="#" />

## Setup

- `Fork` and `clone` this repository.
- `cd` into the project directory.
- Run `npm install`.
- After `npm install` has finished run `npm start`.

## Part 1

### Summary

In this part we will create two functional components so that we don't have to repeat ourselves in the code for the list item and the cart item. These components will need to take in props for the specific item. 

### Instructions

1. Create a Components folder within `src`.
    
2. In this folder, create a Product functional component and a CartItem functional component. The cart component will be a div container that can display an idividual item name and price. The product component will have a div container and be able to display an individual item's name, price, description, and have a button to take the `addToCart` method from props. The product component should also be able to toggle between card and simple view, based on the `toggleView` value, which will be passed in as a prop.
    <details>
    <summary> Detailed Instructions </summary>
    <br />
    Cart Item Component

    ```js
    import React from 'react';

    function CartItem (props) {
        const { item } = props;
        return (
            <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
            </div>
        );

    }
    export default CartItem;
    ```

    Product Component

    ```js
    import React from "react";

    function Product (props) {
      const { item, toggleView } = props;
      return toggleView ? (
        <div>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
          <button onClick={() => props.addItem(item)}>Add to Cart</button>
        </div>
      ) : (
        <div>
          <img src={item.imageUrl} alt="the item" />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <button onClick={() => props.addItem(item)}>Add to Cart</button>
        </div>
      );
    }

    export default Product;
    ```

    </details>
3. Product should take in as props the item object, the addItem method, and the toggleView value from state.
    <details>
    <summary> Detailed Instructions </summary>
    <br />
    ```js
    <Product item={item} addToCart={this.addToCart} toggleView={this.state.toggleView}/>
    ```
    </details>
4. The CartItem component should take in the item object. 
    <details>
    <summary> Detailed Instructions </summary>
    <br />
    ```js
    <CartItem item={item}/>
    ```
    </details>
5. Since we are passing the addToCart and deleteFromCart methods, we need to bind them.
    <details>
    <summary> Detailed Instructions </summary>
    <br />
    In the constructor function 

    ```js
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    ```

    </details>
6. Now, where you are mapping over products in the products section and the cart section, replace that block of code with our new functional components, passing in the required props.
    <details>
    <summary> Detailed Instructions </summary>
    <br />
    Product section being updated to use our Product component.

    ```js
    {this.state.beachGear.map(item=>(
      <Product item={item} addToCart={this.addToCart} toggleView={this.state.toggleView}/>
    ))}
    ```
    Cart section using CartItem component

    ```js
    {this.state.cart.map(item => (
      <CartItem item={item} deleteFromCart={this.deleteFromCart}>
    ))}
    ```

    </details>


## Part 2 

### Summary

In this part we will start using the PropsTypes library, to provide better documentation and error handling for our reusable components. We will also implement a reusable Text component that can render headers or paragraphs depending on its props. 

### Instructions

1. Install the Proptypes library, `npm install prop-types`.

2. Now inside the Product component import proptypes and create a Product.propTypes object (see detailed instructions)
    <details><summary> Detailed Instructions </summary> 
    Import propTypes

    ```js
    import propTypes from 'prop-types';
    ```

    Create proptypes object for this component

    ```js
    Product.propTypes = {
      item: propTypes.shape({
        name: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        id: propTYpes.number.isRequired,
        description: propTypes.string.isRequired,
        quantity: propTypes.number.isRequired,
        imageUrl: propTypes.string.isRequired
      }),
      addItem: propTypes.func.isRequired,
      toggleView: propTypes.bool.isRequired
    }
    ```
    </details>

3. Create proptypes for the CartItem component.

    <details><summary> Detailed Instructions </summary>
    ```js
    import propTypes from 'prop-types';
    ```

    Create proptypes object for this component

    ```js
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
    ```
    </details>

4. Let's create a Text functional component that takes two props, a string called text and a boolean called isHeader. Then have this component render the string as either a 'p' tag or h4, depending on the value of 'isHeader'

    <details><summary> Detailed Instructions </summary>
    Text component

    ```js
    import React from "react";
    import propTypes from 'prop-types';

    export default function Text(props) {
      const { text, isHeader } = props;
      return isHeader ? <h4>{text}</h4> : <p>{text}</p>;
    }
    ```

    Proptypes object

    ```js
    Text.propTypes = {
      text: propTypes.string.isRequired,
      isHeader: propTypes.bool.isRequired
    }
    ```
    </details>

5. Now use the Text component inside of our Product and CartItem components whereever you have an h4 or p tag.

    <details><summary> Detailed Instructions </summary>
    Import the component

    ```js
    import Text from './Text';
    ```

    Use the Text component to replace any `p` or `h4` tags.

    ```js
    // replace: <h4>{item.name}</h4> with the following
    <Text text={item.name} isHeader={true}/>
    // for paragraph tags, 
    <Text text={item.description} isHeader={false}/>
    ```
    </details>

## Part 3 ___ NO Part 3 ___

## Part 4 

### Summary

In this part we will add a search bar which can filter the list of products. We will also add a navbar at the top of the app that can toggle between product and cart view. 

### Instructions

1. In the products section under the header in App.js, create an input that will be our search bar. Store its value on state and create an on-change event listener that will update state with the user input. 

    <details><summary> Detailed Instructions </summary>

    Create input for user to enter search criterion. For it's onChange function, simply update the `searchInput` value on state to reflect the user input.

    ```js
    <input type="text" 
          value={this.state.searchInput} 
          onChange={ evt=>this.setState({searchInput: evt.target.value}) }
    />
    ```
    </details>

2. Now we need to change the code where we map over products to display, so that we are filtering based on the user input string, if the user has typed anything. 

    <details><summary> Detailed Instructions </summary>

    For each of our product categories, we need to add a conditional to check if the name of the item contains the user's search input. Use the String prototype method `toLowerCase`, to make our search case insensitive.

    ```js
    {this.state.beachGear.map(item=>{
      if (item.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
      return <Product item={item} addToCart={this.addToCart} toggleView={this.state.toggleView} />
    })}
    ```
    </details>

3. Let's add a Navbar with a couple buttons at the top of the app. This should give the user the ability to toggle between Product View and Cart View, by changing a boolean value on state. You will need to use conditional rendering (with the ternary operator), so that only one view is displayed at a time. 

    <details><summary> Detailed Instructions </summary>

    Create a navbar with two spans, for the products and cart view

    ```js
    <nav className="nav">
      <span> products </span> | 
      <span> cart </span>
    </nav>
    ```

    These spans should set a value on state, which we can check to see which view should be displayed. 

    ```js
    <span onClick={_=>this.setState({display: "products"})}> products </span> |
    <span onClick={_=>this.setState({display: "cart"})}> cart </span>
    ```

    Now we will use conditional rendering to view the products or cart page, depending on the value of `this.state.display`

    ```js
    render() {
      return (
        <div>
          <nav className="nav">
          // ...
          </nav>
          {
            this.state.display === "products" ? (
              <section className="products">
              // ... 
              </section>
            ) : (
              <section className="cart">
              // ...
              </section>
            )
          }
        </div>
      )
    }
    ```
    </details>

___________________________end of day 2____________________________________

