<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project we will create a e-commerce React application from an start to finish. We will be provided with the basic file structure from create-react-app, but the App.js file is empty. We will be working on this app over the course of three days. Each day's project is divided into four Steps, with the first step being comparable to that day's mini-project and the following steps adding more features or implementing new patterns. You should expect to be able to complete the first two steps on each day, while steps three and four will offer a challenge for 

_____________________________end of day 1_______________________________________

# Day 2

On this day we will be refactoring some of our code to take advantage of some of the tools that React has to offer. You should have gotten to at least step 2 of Day 1, in order to proceed with this project. We will be using reusable functional components to follow the DRY principle, which is, <em>don't repeat yourself</em>. We will pass props into our reusable components. At the end of this project, you should have a better understanding of the following concepts:

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

In this step we will create two functional components so that we don't have to repeat ourselves in the code for the list item and the cart item. These components will need to take in props for the specific item. 

### Instructions

1. Create a Components folder within `src`.
    
2. In this folder, create a Product functional component and a CartItem functional component.
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
      const { item, cardView } = props;
      return cardView ? (
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

    </details>
4. The CartItem component should take in the item object. 
    <details>
    <summary> Detailed Instructions </summary>
    <br />

    </details>
5. Since we are passing the addItem method, we need to bind this.
    <details>
    <summary> Detailed Instructions </summary>
    <br />

    </details>
6. Now, where you are mapping over products in the products section and the cart section, replace that block of code with our new functional components, passing in the required props.
    <details>
    <summary> Detailed Instructions </summary>
    <br />

    </details>

<details><summary> Detailed Instructions </summary>

Create a Components folder with a `CartItem.js` and `Product.js` file.

`CartItem.js` should be a functional component that can take in an item object as a prop, and render the name and price in the appropriate HTML tags. 

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

The Product component should also be a functional component that takes in props.

```js

```

Since we are passing in a method to this component, we need to bind it so that it preserves the right `this` context. We can do this at the end of App's constructor function.

```js
this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
```

Now we can use these functional components in place of the JSX we had written when mapping over the products array. Here is the example for mapping over the products for the Camping category (you get to make up your own product categories).

```js
import Product from './Components/Product'
// ...
<h2>Camping</h2>
{
  this.state.camping.map( item => {
    return(
      <Product
        item={item}
        addItem={this.handleAddItemToCart}
        cardView={this.state.toggleCard}
      />
    )
  })
}
```

Then we will do the same for the Cart Items. Remeber, with one line arrow functions, we don't need an explicit return statement.

```js
<h1>CART</h1>
{
  this.state.cart.map( item => <CartItem item={item} /> )
}
```


</details>

## Step 2 

### Summary

In this step we will start using the PropsTypes library, to provide better documentation and error handling for our reusable components. We will also implement a reusable Text component that can render headers or paragraphs depending on its props. 

### Instructions

* Install the Proptypes library, `npm install prop-types`.
* Now inside the Product component import proptypes and create a Product.propTypes object (see deatiled instructions)
* Create proptypes for the CartItem component.
* Let's create a Text functional component that takes two props, a string called text and a boolean called isHeader. Then have this component render the string as either a 'p' tag or h4, depending on the value of 'isHeader'
* Now use the Text component inside of our Product and CartItem components whereever you have an h4 or p tag.

<details><summary> Detailed Instructions </summary> 

Install the proptypes library with `npm install prop-types`, and then import this into the Product and CartItem components

```js
import PropTypes from 'prop-types'
```

Now using the proptypes library, define a propTypes object for our two reusable components. Here is the propTypes object for the Product component.

```js
// after the Product function declaration
Product.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  }),
  addItem: PropTypes.func.isRequired,
  cardView: PropTypes.bool.isRequired
}
```

Create a reusable functional component called Text which can take two props and render a string in either a p or h4 tag. Use Proptypes.

```js
import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {
  const { test, isHeader } = props;
  return isHeader ? <h4>{text}</h4> : <p>{text}</p>; 
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  isHeader: PropTypes.bool.isRequired
}
```

Now we can use this Text component inside our Product and CartItem components to replace blocks of text. 

```js
import Text from "./Text";
// ...
<Text text={item.name} isHeader={true} />
<Text text={"$" + item.price} isHeader={false} />
// ...
```

</details> 

## Step 3 ___ NO STEP 3 ___

### Summary

### Instructions

<details><summary> Detailed Instructions </summary>
</details>

## Step 4 

### Summary

In this step we will add a search bar which can filter the list of products. We will also add a navbar at the top of the app that can toggle between product and cart view. 

### Instructions

* In the products section under the header, create an input that will be our search bar. Store its value on state and create an on-change event listener that will update state with the user input. 
* Now we need to change the code where we map over products to display, so that we are filtering based on the user input string, if the user has typed anything. 
* Let's add a Navbar with a couple buttons at the top of the app. This should give the user the ability to toggle between Product View and Cart View, by changing a boolean value on state. You will need to use conditional rendering (with the ternary operator), so that only one view is displayed at a time. 

<details><summary> Detailed Instructions </summary>

Let's create an input field for the user to search through the products. Under the products header,

```js
<p>Search Product Names: </p>
<input value={this.state.searchFilter} onChange={ e => this.setState({ searchFilter: e.target.value })}/>
```

Now we need to adjust our code where we are mapping over the product arrays, to filter these if the user has typed something.
We can chain the map function onto the filter function because filter returns an array.

```js
<h2>Beach Gear</h2>
{
  this.state.beachGear
  .filter( item => item.name.includes(this.state.searchFilter.toLowerCase()))
  .map( item => (
    <Product
      item={item}
      addItem={this.handleAddItemToCart}
      cardView={this.state.toggleCard}
  ))

}
```

Now to create a navbar with the options to toggle between cart and product view. We can also put our button in here which switches the product display type from card to list view. 

```js
<nav>
  <button onClick={this.toggleCardView}> Toggle View </button>
  <button onClick={_=>this.setState({ currentView: "products" })}>   Shop        </button>
  <button onClick={_=>this.setState({ currentView: "cart"    })}>    View Cart   </button>
</nav>
```

Now we just need to conditionally render our products and cart sections depending on the value of `this.state.currentView`

```js
render() {
  return (
    <div>
      <nav> 
        // ...
      </nav>
      {
        this.state.currentView === "products" 
        ? <section className="products">
          // ...
        </section>
        : <section className="cart">
          // ...
        </section>
      }
    </div>
  )
}
```

</details>

___________________________end of day 2____________________________________

# Day 3

....

* Components
* State
* Conditional Rendering
* Array.map
* JSX

## Step 1

### Summary

### Instructions

<details><summary> Detailed Instructions </summary>
</details>

## Step 2

### Summary

### Instructions

<details><summary> Detailed Instructions </summary>
</details>

## Step 3 

### Summary

### Instructions

<details><summary> Detailed Instructions </summary>
</details>

## Step 4 

### Summary

### Instructions

<details><summary> Detailed Instructions </summary>
</details>