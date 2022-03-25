import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useState(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
},[])
        const [cart, setCart] = useState([]);
        
        const addToCartHandle = (product) => {
            const newCart = [...cart, product];
            setCart(newCart);
        }
        // const [emptyCart, setEmptyCart] = useState([]);
        // const resetBtn = () => {
        //     const newEmptyCart = [];
        //     setEmptyCart(newEmptyCart);
            
            
        // }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row row-cols-1 row-cols-lg-3'>
                        {
                            products.map(product => <Product
                            product={product}
                            key={product.id}
                            event={addToCartHandle}
                            ></Product>)
                        }
                    </div>

                </div>
                <div className='col-md-3 bg-warning rounded'>
                    <Cart cart={cart}
                    ></Cart>
                </div>
            </div>
            

        </div>
    );
};

export default Shop;