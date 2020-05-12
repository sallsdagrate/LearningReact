import React, { useState, useEffect } from 'react';
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
import getProducts from "./getProducts"
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

  const [products, setProducts] = useState([])
  useEffect(()=>{
    let p = getProducts()
    setProducts(p)
  })

  console.log(products)
  return (
    <div className="App">
      <div>
        <Navbar setBasket={setBasket} basket = {basket} cart = {cart} total={total} />
      </div>
      <div className = "items">
        {products.map(p=>{
          return <StoreItem {...p} addItem={addToCart} addPrice={updatePrice}/>
        })}
      </div>
    </div>
  );
}

export default App;
