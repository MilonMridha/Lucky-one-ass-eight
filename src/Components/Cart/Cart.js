import React from 'react';
import Summary from '../Summary/Summary';
import './Cart.css'
const Cart = ({cart , addHandle }) => {
    
    return (
        <div className='cart-summary'>
            <h4>Cart Summary</h4>
            <p>Selected Item : {cart.length}</p>
            {
                cart.map(item => <Summary
                item={item}
                key={item.id}
                
                ></Summary>
            )
            }
            <button onClick={() => addHandle()} className='btn btn-success mt-2'>Select one item</button>
            
            <button className='btn btn-danger mt-2'>Reset all item</button>
        </div>
    );
};

export default Cart;

