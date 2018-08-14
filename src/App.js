import React, { Component } from 'react';
import './App.css';
import Product from './Components/Product';
import CartItem from './Components/CartItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beachGear:[
        {
          id:1,
          name:'Flip Flops',
          description:'Some flippy floppys',
          price:5.99,
          imageUrl:'http://via.placeholder.com/350x150'
        },
        {
          id:2,
          name:'Tent',
          description:'TENTS',
          price:6.99,
          imageUrl:'http://via.placeholder.com/350x150'
        },
      ],
        camping:[
          {
            id:3,
            name:'Sun tan lotion',
            description:'Gotta look fly guy',
            price:7.99,
            imageUrl:'http://via.placeholder.com/350x150'
          },
          {
            id:4,
            name:'Mice',
            description:'Not blind',
            price:8.99,
            imageUrl:'http://via.placeholder.com/350x150'
          },

        ],
      
      cart:[],
      toggleCard:false,
      searchFilter:''
    }
    this.checkout = this.checkout.bind(this);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
    this.toggleCardView = this.toggleCardView.bind(this);
  }
  handleAddItemToCart( item ){
    let newCart = this.state.cart.map( cartItem => {
      return {
        id:cartItem.id,
        name:cartItem.name,
        description:cartItem.description,
        price:cartItem.price,
        imageUrl:cartItem.imageUrl
      }
    })
    newCart.push(item)
    this.setState({
      cart:newCart
    })
  }
  checkout(){
    alert("Here's yer stuff")
    this.setState({
      cart:[]
    })
  }
  toggleCardView(){
    this.setState({
      toggleCard:!this.state.toggleCard
    })
  }
  search( searchInput ){
    this.setState({
      searchFilter:searchInput
    })
  }
  render() {
    return (
      <div>
        <div className='products'>
          <h1>PRODUCTS</h1>
          <button onClick={this.toggleCardView}>Toggle View</button>
          <p>Search Product Names: </p>
          <input value={this.state.searchFilter} onChange={ e => this.search(e.target.value)}/>
          <h2>Beach Gear</h2>
          {
            this.state.beachGear.filter( item => item.name.includes(this.state.searchFilter))
            .map( item => {
              return(
                // <div>
                //   <img src={item.imageUrl} alt='the item'/>
                //   <h4>{item.name}</h4>
                //   <p>{item.description}</p>
                //   <p>{item.price}</p>
                //   <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                // </div>
                <Product
                  item={item}
                  addItem={this.handleAddItemToCart}
                  cardView={this.state.toggleCard}
                />
              )
            })
          }
          <h2>Camping</h2>
          {
            this.state.camping.filter( item => item.name.includes(this.state.searchFilter))
            .map( item => {
              return(
                // <div>
                //   <img src={item.imageUrl} alt='the item'/>
                //   <h4>{item.name}</h4>
                //   <p>{item.description}</p>
                //   <p>{item.price}</p>
                //   <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                // </div>
                <Product
                  item={item}
                  addItem={this.handleAddItemToCart}
                  cardView={this.state.toggleCard}
                />
              )
            })
          }
          
        </div>
        <div className='side_bar'>
          <div className='cart'>
            <h1>CART</h1>
            {
              this.state.cart.map( item => {
                return( 
                  // <div>
                  //   <h4>{item.name}</h4>
                  //   <p>{item.price}</p>
                  // </div>
                  <CartItem
                    item={item}
                  />
                )
              })
            }

          </div>
          <div className='total'>
            <h1>TOTAL</h1>
            <p>${
              this.state.cart.reduce( ( accumulator, current ) => accumulator+= current.price,0)
            }</p>
            <button onClick={this.checkout}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// Day 2 starting code starts at day 1's stage 2 solution

// Day2 props
// proptypes, reusable components, functional component props
// 1 - List into seperate components, include add to cart functionality
// 2- Add proptypes onto a list item, Reusable text component, based on props changes styling: header, subtext, list view vs card view required.
// 3 - ?
// 4- Add search filter functionality, onchange or onclick, add navbar buttons at the top that toggle between card and product view. Fake if/else conditional rendering. 1 or 2 opportunitiesOther opportunites that text is a functional component. Improve input validation. changing quantities to 0, removes from cart etc.