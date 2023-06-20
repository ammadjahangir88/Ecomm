import "./Cart.scss";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem  from './CartItem/CartItem'
import { Context } from "../../utils/context";
const Cart = ({ setShowcart }) => {
    const {cartItems ,cartSubTotal}= useContext(Context)
    
    return <div className="cart-panel">
        <div className="opacity">
            <div className="opac-layer"></div>
            <div  className="cart-content">
                <div className="cart-header">
                <span className="heading">Shopping cart</span>
                <span className="close-btn" onClick={() => { setShowcart(false) }}>
               
                    <MdClose />
                    <span className="text">close</span>
                </span>
                
                </div>
                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart</span>
                    <button className="return-cta"> Return to shop</button>
                </div>}
                {!!cartItems?.length && 
                <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">SubTotal:</span>
                        <span className="text total">$ {cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
                </>
                }
            </div>
        </div>
    </div>;
};

export default Cart;
