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
        
        // Random selected one btn onclick----------->
        const selectOneItem =() => {
            const random = [cart[Math.floor(Math.random() * cart.length)]]
            setCart(random);
            if(cart){
                alert('You selected One Item')
                return
            }
           
        }

        // Reset btn event handler-------------->
        const resetEvent =() => {
            const resetCart = [];
            setCart(resetCart);
        }

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
                {/* Car-Summary section  */}
                <div className='col-md-3 bg-warning rounded shadow '>
                    <Cart cart={cart}
                    addHandle={selectOneItem}
                    addReset={resetEvent}
                    ></Cart>
                </div>
            </div>
            

        </div>
    );
};

export default Shop;