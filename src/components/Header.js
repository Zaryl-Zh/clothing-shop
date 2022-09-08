import React, { Component } from 'react';
import classes from './Header.module.css';
import Logo from '../assets/a-logo.svg';
import Cart from '../assets/Empty Cart.svg';

export default class Header extends Component {
  render = () => (
    <div className={classes.header}>
      <div className={classes.categories}>
        <a href="#">Women</a>
        <a href="#">Men</a>
        <a href="#">Kids</a>
      </div>
      <div className={classes.logo}>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className={classes.cart}>
        <select name="currency" id="option">
            <option value="">$ </option>
            <option value="">€ </option>
            <option value="">¥ </option>
        </select>
        <a href="#"><img src={Cart} alt="cart" /></a>
      </div>
    </div>
  );
}
