import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { Hi } from './components/Welcome';
import Greet from './components/Greet';
import Navbar from './components/Navbar';
import Box from './components/Box';
import StoreItem from './components/StoreItem'
import { css, jsx } from '@emotion/core'
import Trolley from './Models/Trolley'
import phone from './images/phone.jpg'
import speaker from './images/speaker.jpg'
import headphones from './images/headphones.jpg'
import Loader from "./components/Loader"
/**@jsx jsx */
const App = () => {
  var [basket, setBasket] = useState(false)
  var [cart, setCart] = useState([])
  var[total, setTotal] = useState(0)
  const updatePrice = (price) => {
    setTotal(total += price)
  }
  const addToCart = (item) => {
    setCart([...cart, item])
  }
  return (
    <div className="App">
      <Loader />
      <div>
        <Navbar setBasket={setBasket} basket = {basket} cart = {cart} total={total} />
      </div>
      <div className = "items">
        {[
          {
            img: phone,
            name: 'Phone',
            price: 300
          },
          {
            img: headphones,
            name: 'HeadPhones',
            price: 50
          },
          {
            img: phone,
            name: 'Phone',
            price: 300
          },
        ].map(p=>{
          return <StoreItem {...p} addItem={addToCart} addPrice={updatePrice}/>
        })}
        {/* <StoreItem className = "store" img={phone} name="Phone" price={300.00} addItem={addToCart} addPrice={updatePrice}  />
        <StoreItem className = "store" img={headphones} name = "Headphones" price = {50.00} addItem={addToCart} addPrice={updatePrice} />
        <StoreItem className = "store" img={speaker} name = "Speaker" price = {20.45} addItem = {addToCart} addPrice={updatePrice} /> */}
      </div>
    </div>
  );
}

export default App;
