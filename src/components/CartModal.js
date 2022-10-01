import React, { Component } from 'react';
import classes from './CartModal.module.css';
export default class CartModal extends Component {
  render = () => (
    <div className={classes.cart}>
      <div className={classes.cartTitle}>
        <h1>My Bag, <span>3 items</span>  </h1>
      </div>
      
      <div className={classes.cartInfo}>

        <div className={classes.cartItem}>
          <div className={classes.side}>
            <h1 className={classes.brandName}>
              Apollo <br /> <span>Running Short</span> 
            </h1>
            <div className={classes.price}>
              <h2>$50.00</h2>
            </div>
            <div className={classes.size}>
              <h2>Size:</h2>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
            <div className={classes.color}>
              <h2>Color:</h2>
              <button />
              <button />
              <button />
            </div>
          </div>
          
              <div className={classes.amountBtn}>
                <div>
                  <button>+</button>
                </div>
                <div className={classes.amount}>1</div>
                <div>
                  <button>-</button>
                </div>
              </div>
              <div className={classes.itemImg}></div>
          
        </div>


        <div className={classes.cartItem}>
          <div className={classes.side}>
            <h1 className={classes.brandName}>
              Apollo <br /> <span>Running Short</span> 
            </h1>
            <div className={classes.price}>
              <h2>$50.00</h2>
            </div>
            <div className={classes.size}>
              <h2>Size:</h2>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
            <div className={classes.color}>
              <h2>Color:</h2>
              <button />
              <button />
              <button />
            </div>
          </div>
          
              <div className={classes.amountBtn}>
                <div>
                  <button>+</button>
                </div>
                <div className={classes.amount}>1</div>
                <div>
                  <button>-</button>
                </div>
              </div>
              <div className={classes.itemImg}></div>
        </div>
      </div>
      <div className='total'>
            <div>Total</div>
            <div>$200.00</div>
          </div>
    </div>
  );
}
