import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart-summary'>
            <h4>Cart Summary</h4>
            <p>Selected Item : {cart.length}</p>
            {
                cart.map(item =><li>
                    {item.name}</li>
                    
                )
            }
        </div>
    );
};

export default Cart;