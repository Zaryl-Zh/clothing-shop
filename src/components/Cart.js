import React, { Component } from 'react';
import classes from './Cart.module.css';
import Item from '../assets/Product D.svg';

export default class Cart extends Component {
  render = () => (
    <div className={classes.cart}>
      <div className={classes.cartTitle}>
        <h1>CART</h1>
      </div>
      <div className={classes.line} />
      <div>
        <div className={classes.cartItem}>
          <div>
            <h1 className={classes.brandName}>
              Apollo <span>Running Short</span>
            </h1>
            <div className={classes.price}>
              <h2>$50.00</h2>
            </div>
            <div className={classes.size}>
              <h2>SIZE:</h2>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
            <div className={classes.color}>
              <h2>COLOR:</h2>
              <button />
              <button />
              <button />
            </div>
          </div>
          <div>
            <div className={classes.amountInfo}>
              <div className={classes.amountBtn}>
                <div>
                  <button>+</button>
                </div>
                <div className={classes.amount}>1</div>
                <div>
                  <button>-</button>
                </div>
              </div>
              <div className={classes.itemImg}>
                <img src={Item} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.line} />

        <div className={classes.cartItem}>
          <div>
            <h1 className={classes.brandName}>
              Apollo <span>Running Short</span>
            </h1>
            <div className={classes.price}>
              <h2>$50.00</h2>
            </div>
            <div className={classes.size}>
              <h2>SIZE:</h2>
              <button>S</button>
              <button>M</button>
            </div>
            <div className={classes.color}>
              <h2>COLOR:</h2>
              <button />
              <button />
              <button />
            </div>
          </div>
          <div>
            <div className={classes.amountInfo}>
              <div className={classes.amountBtn}>
                <div>
                  <button>+</button>
                </div>
                <div className={classes.amount}>1</div>
                <div>
                  <button>-</button>
                </div>
              </div>
              <div className={classes.itemImg}>
                <img src={Item} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.line} />
      <div>
        <div>
          <h1>Tax 21%</h1>
          <h1>$42.00</h1>
        </div>
        <div>
          <h1>Quantity</h1>
          <h1>3</h1>
        </div>
        <div>
          <h1>Total</h1>
          <h1>$200.00</h1>
        </div>
      </div>
    </div>
  );
}
