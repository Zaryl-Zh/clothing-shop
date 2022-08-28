import React, { Component } from 'react';
import classes from './Item.module.css';
import ItemImg from '../assets/Image.svg';

export default class Item extends Component {
  render = () => (
    <div className={classes.item}>
      <div className={classes.itemImg}>
        <ul>
          <li>
            <img src={ItemImg} alt="#" />
          </li>
          <li>
            <img src={ItemImg} alt="#" />
          </li>
          <li>
            <img src={ItemImg} alt="#" />
          </li>
        </ul>
      </div>
      <div className={classes.description}>
        <div className={classes.zoomedItem}></div>
        <div className={classes.itemDetails}>
          <h1 className={classes.brandName}>
            Apollo  <span>Running Short</span>
          </h1>
          <div className={classes.size}>
            <h2>SIZE:</h2>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <div className={classes.color}>
            <h2>COLOR:</h2>
            <button/>
            <button/>
            <button/>
          </div>
          <div className={classes.price}>
            <h2>PRICE:</h2>
            <h2>$50.00</h2>
          </div>
          <button className={classes.addBtn}>ADD TO CART</button>
          <p className={classes.textDescription}>
            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic
            cocktail dresses and party dresses from all your favorite brands.
          </p>
        </div>
      </div>
    </div>
  );
}
