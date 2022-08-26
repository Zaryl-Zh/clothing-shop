import React, { Component } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.css'

export default class App extends Component {
  render = () => (
    <div className='container'>
      <Header/>
      <Categories/>
    </div>
  )
}
