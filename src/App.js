import React, { Component } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

export default class App extends Component {
  render = () => (
    <div className='container'>
      <Header/>
      {/* <Categories/>
      <Item/> */}
      <Cart/>
    </div>
  )
}
