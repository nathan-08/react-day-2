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
          imageUrl:'http://via.placeholder.com/350x150',
          quantity:0
        },
        {
          id:2,
          name:'Tent',
          description:'TENTS',
          price:6.99,
          imageUrl:'http://via.placeholder.com/350x150',
          quantity:0
        },
      ],
        camping:[
          {
            id:3,
            name:'Sun tan lotion',
            description:'Gotta look fly guy',
            price:7.99,
            imageUrl:'http://via.placeholder.com/350x150',
            quantity:0
          },
          {
            id:4,
            name:'Mice',
            description:'Not blind',
            price:8.99,
            imageUrl:'http://via.placeholder.com/350x150',
            quantity:0
          },

        ],
      
      cart:[],
      toggleCard:false,
      searchFilter:'',
      toggleCart:false,
      address:'',
      creditCard:''
    }
    this.checkout = this.checkout.bind(this);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
    this.toggleCardView = this.toggleCardView.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.toggleProducts = this.toggleProducts.bind(this);
  }
  handleAddItemToCart( item ){
    let newCart = this.state.cart.map( cartItem => {
      return {
        id:cartItem.id,
        name:cartItem.name,
        description:cartItem.description,
        price:cartItem.price,
        imageUrl:cartItem.imageUrl,
        quantity:cartItem.quantity
      }
    })
    let itemIndex = newCart.findIndex( cartItem => cartItem.id === item.id)
    if( itemIndex!== -1){
      newCart[itemIndex].quantity++
    } else {
      item.quantity++
      newCart.push(item)
    }
    this.setState({
      cart:newCart
    })
  }

  removeItemFromCart( id ){
    let newCart = this.state.cart.map( cartItem => {
      return {
        id:cartItem.id,
        name:cartItem.name,
        description:cartItem.description,
        price:cartItem.price,
        imageUrl:cartItem.imageUrl,
        quantity:cartItem.quantity
      }
    })
    let itemIndex = newCart.findIndex( cartItem => cartItem.id === id)
    if(newCart[itemIndex].quantity === 1){
      newCart.splice(itemIndex,1)
    }
    else {
      newCart[itemIndex].quantity--
    }
    this.setState({
      cart:newCart
    })
  }

  checkout(){
    if(!this.state.address || !this.state.creditCard){
      alert("WHERE YOU LIVE. WHERE MY MONEY")
    }
    else{
      alert("Here's yer stuff")
      this.setState({
        cart:[]
      })
    }
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
  toggleCart(){
    this.setState({
      toggleCart:true
    })
  }
  toggleProducts(){
    this.setState({
      toggleCart:false
    })
  }
  handleAddressInput( address ){
    this.setState({
      address
    })
  }
  handleCreditCardInput( creditCard ){
    this.setState({
      creditCard
    })
  }
  render() {
    return (
      <div>
        <nav>
          <button onClick={this.toggleCardView}>Toggle View</button>
          <button onClick={this.toggleProducts}>See Products</button>
          <button onClick={this.toggleCart}>See Cart</button>
        </nav>
        {

        !this.state.toggleCart
        ?<div className='products'>
          <h1>PRODUCTS</h1>
          
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
        
        :<div className='side_bar'>
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
                    removeItem={this.removeItemFromCart}
                  />
                )
              })
            }

          </div>
          <div className='inputs'>
            <input placeholder='address' value={this.state.address} onChange={ (e) => this.handleAddressInput(e.target.value)}/>
            <input placeholder='credit card info' value={this.state.creditCard} onChange={ (e) => this.handleCreditCardInput(e.target.value)}/>
          </div>
          <div className='total'>
            <h1>TOTAL</h1>
            <p>${
              this.state.cart.reduce( ( accumulator, current ) => accumulator+= current.price*current.quantity,0)
            }</p>
            <button onClick={this.checkout}>Checkout</button>
          </div>
        </div>
        }
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