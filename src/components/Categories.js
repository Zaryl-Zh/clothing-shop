import React, { Component } from 'react';
import classes from './Categories.module.css';
import Item from '../assets/Image.svg';
import Icon from '../assets/Circle Icon.svg'

export default class Categories extends Component {
  render = () => (
    <div>
      <div className={classes.title}>Category name</div>
      <div className={classes.container}>
        <div className={classes.items}>
          <ul>
            <li>
              <img className={classes.img} src={Item} alt="clothes" />
              <img src={Icon} alt="cart-icon" className={classes.icon}/>
              <p className={classes.name}>Apollo Running Short</p>
              <p className={classes.price}>$50.00</p>
            </li>
            <li>
              <img className={classes.img} src={Item} alt="clothes" />
              <img src={Icon} alt="cart-icon" className={classes.icon}/>
              <p className={classes.name}>Apollo Running Short</p>
              <p className={classes.price}>$50.00</p>
            </li>
            <li>
              <img className={classes.img} src={Item} alt="clothes" />
              <img src={Icon} alt="cart-icon" className={classes.icon}/>
              <p className={classes.name}>Apollo Running Short</p>
              <p className={classes.price}>$50.00</p>
            </li>
            <li>
              <img className={classes.img} src={Item} alt="clothes" />
              <img src={Icon} alt="cart-icon" className={classes.icon}/>
              <p className={classes.name}>Apollo Running Short</p>
              <p className={classes.price}>$50.00</p>
            </li>
            <li>
              <img className={classes.img} src={Item} alt="clothes" />
              <img src={Icon} alt="cart-icon" className={classes.icon}/>
              <p className={classes.name}>Apollo Running Short</p>
              <p className={classes.price}>$50.00</p>
            </li>
            <li>
              <img className={classes.img} src={Item} alt="clothes" />
              <img src={Icon} alt="cart-icon" className={classes.icon}/>
              <p className={classes.name}>Apollo Running Short</p>
              <p className={classes.price}>$50.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
